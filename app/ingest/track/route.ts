import { type NextRequest } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'sales-development-rep';
const MAX_BODY_BYTES = 256_000;
const MAX_EVENTS_PER_BATCH = 100;
const allowedOrigins = new Set([
  'https://salesdevelopmentrep.com',
  'https://www.salesdevelopmentrep.com',
  'http://127.0.0.1:4341',
  'http://localhost:4341',
]);

type TrackingEvent = {
  client_event_id: string;
  event_type: string;
  timestamp: string;
  session_id: string;
  anonymous_id: string;
  page_url?: string;
  page_path?: string;
};

function isTrackingEvent(event: unknown): event is TrackingEvent {
  if (!event || typeof event !== 'object' || Array.isArray(event)) return false;
  const item = event as Record<string, unknown>;
  if (typeof item.client_event_id !== 'string' || item.client_event_id.length < 8 || item.client_event_id.length > 200) return false;
  if (typeof item.event_type !== 'string' || item.event_type.length < 1 || item.event_type.length > 100) return false;
  if (typeof item.timestamp !== 'string' || !Number.isFinite(Date.parse(item.timestamp))) return false;
  if (typeof item.session_id !== 'string' || item.session_id.length < 1 || item.session_id.length > 200) return false;
  if (typeof item.anonymous_id !== 'string' || item.anonymous_id.length < 1 || item.anonymous_id.length > 200) return false;
  if (item.page_url !== undefined && typeof item.page_url !== 'string') return false;
  if (item.page_path !== undefined && typeof item.page_path !== 'string') return false;
  return true;
}

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const originHeader = request.headers.get('origin');
    if (!originHeader) {
      return Response.json({ status: 'error', detail: 'Origin required' }, { status: 403 });
    }

    let origin: URL;
    try {
      origin = new URL(originHeader);
    } catch {
      return Response.json({ status: 'error', detail: 'Invalid origin' }, { status: 403 });
    }
    if (!allowedOrigins.has(origin.origin)) {
      return Response.json({ status: 'error', detail: 'Origin not allowed' }, { status: 403 });
    }

    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return Response.json({ status: 'error', detail: 'JSON required' }, { status: 415 });
    }

    const declaredLength = Number(request.headers.get('content-length') || '0');
    if (declaredLength > MAX_BODY_BYTES) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }

    let payload: { site_id?: unknown; events?: unknown };
    try {
      payload = JSON.parse(body);
    } catch {
      return Response.json({ status: 'error', detail: 'Invalid JSON' }, { status: 400 });
    }
    if (payload.site_id !== SITE_ID || !Array.isArray(payload.events) || payload.events.length < 1 || payload.events.length > MAX_EVENTS_PER_BATCH || payload.events.some((event) => !isTrackingEvent(event))) {
      return Response.json({ status: 'error', detail: 'Invalid tracking batch' }, { status: 400 });
    }

    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return Response.json({ status: 'error' }, { status: 502 });
  }
}
