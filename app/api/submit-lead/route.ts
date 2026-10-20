import { createHash, randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'sales-development-rep';
const MAX_BODY_BYTES = 64_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 8;
const allowedOrigins = new Set([
  'https://salesdevelopmentrep.com',
  'https://www.salesdevelopmentrep.com',
  'http://127.0.0.1:4341',
  'http://localhost:4341',
]);
const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);
const requestCounts = new Map<string, { count: number; resetAt: number }>();
const MAX_RATE_KEYS = 2_048;
let rateChecks = 0;

export const runtime = 'nodejs';

function normalizedAddress(value: string | null) {
  const address = value?.trim();
  if (!address || address.length > 64 || !/^[0-9a-f:.]+$/i.test(address)) return '';
  return address;
}

function clientRateKey(request: Request) {
  const cloudflareAddress = request.headers.has('cf-ray')
    ? normalizedAddress(request.headers.get('cf-connecting-ip'))
    : '';
  const proxyAddress = normalizedAddress(request.headers.get('x-real-ip'));
  if (cloudflareAddress || proxyAddress) return `ip:${cloudflareAddress || proxyAddress}`;

  // Avoid one shared anonymous bucket. This bounded, hashed fallback is only a
  // best-effort guard when the trusted edge does not supply a client address.
  const fingerprint = [
    request.headers.get('user-agent') || '',
    request.headers.get('accept-language') || '',
    request.headers.get('sec-ch-ua') || '',
  ].join('\n');
  return `fp:${createHash('sha256').update(fingerprint).digest('hex').slice(0, 24)}`;
}

function pruneRateKeys(now: number) {
  rateChecks += 1;
  if (rateChecks % 64 === 0) {
    for (const [key, value] of requestCounts) {
      if (value.resetAt <= now) requestCounts.delete(key);
    }
  }
  while (requestCounts.size >= MAX_RATE_KEYS) {
    const oldest = requestCounts.keys().next().value as string | undefined;
    if (!oldest) break;
    requestCounts.delete(oldest);
  }
}

function rateLimited(request: Request): boolean {
  const now = Date.now();
  pruneRateKeys(now);
  const key = clientRateKey(request);
  const current = requestCounts.get(key);
  if (!current || current.resetAt <= now) {
    requestCounts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT;
}

function error(message: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ ok: false, message }, { status, headers });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || !allowedOrigins.has(origin)) return error('Request origin is not allowed.', 403);

  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().startsWith('multipart/form-data;')) return error('Multipart form data is required.', 415);

  const declaredLength = Number(request.headers.get('content-length') || '0');
  if (declaredLength > MAX_BODY_BYTES) return error('Request is too large.', 413);
  if (rateLimited(request)) return error('Too many requests. Please try again later.', 429, { 'Retry-After': '600' });

  const body = await request.arrayBuffer();
  if (body.byteLength > MAX_BODY_BYTES) return error('Request is too large.', 413);

  let form: FormData;
  try {
    form = await new Request(request.url, { method: 'POST', headers: { 'content-type': contentType }, body }).formData();
  } catch {
    return error('The form payload could not be read.', 400);
  }

  if (form.get('website_url')) return NextResponse.json({ ok: true, ignored: true });

  const firstName = String(form.get('first_name') || '').trim();
  const lastName = String(form.get('last_name') || '').trim();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const phoneCountry = String(form.get('phone_country') || '').trim();
  const phone = String(form.get('phone') || '').trim();
  const company = String(form.get('company') || '').trim();
  const companySize = String(form.get('company_size') || '').trim();
  const positions = String(form.get('positions_to_fill') || '').trim();
  const referral = String(form.get('referral_source') || '').trim();
  const message = String(form.get('message') || '').trim();

  if (!/^\S+@\S+\.\S+$/.test(email) || !firstName || !lastName || !company || !companySize || !positions || !referral) {
    return error('Please complete every required field.', 400);
  }
  if (personalDomains.has(email.split('@')[1])) return error('Please use your business email address.', 400);

  const eventId = randomUUID();
  const acceptedAt = new Date().toISOString();
  const acceptance = {
    site_id: SITE_ID,
    events: [{
      client_event_id: eventId,
      event_type: 'lead_acceptance',
      timestamp: acceptedAt,
      session_id: `server-${eventId}`,
      anonymous_id: `server-${eventId}`,
      page_url: 'https://salesdevelopmentrep.com/contact-us',
      page_path: '/contact-us',
      page_title: 'Contact Us | Sales Development Rep',
      event_value: 'contact-page-consultation',
      event_metadata: JSON.stringify({
        lead_name: `${firstName} ${lastName}`,
        lead_email: email,
        lead_phone: `${phoneCountry} ${phone}`.trim(),
        phone_country: phoneCountry,
        lead_message: message,
        company,
        company_size: companySize,
        positions_to_fill: positions,
        referral_source: referral,
        company_website: String(form.get('company_website') || '').trim(),
        source: 'contact-page-consultation',
        acceptance_owner: 'server',
      }),
    }],
  };

  try {
    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(acceptance),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    if (!upstream.ok) return error('We could not safely accept your request. Please try again.', 502);
  } catch {
    return error('We could not safely accept your request. Please try again.', 502);
  }

  return NextResponse.json({ ok: true, acceptanceId: eventId }, { headers: { 'Cache-Control': 'no-store' } });
}
