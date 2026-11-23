import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { TestimonialsRail } from '@/components/TestimonialsRail';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us | Sales development staffing consultation',
  description: 'Talk with Sales Development Rep about specialist remote support for prospecting operations.',
  alternates: { canonical: '/contact-us' },
};

const steps = [
  ['Discovery', 'Map the queue', 'Name the recurring workflow, current owner, systems, sources, and exception paths.'],
  ['Role design', 'Write the boundary', 'Define inputs, prepared output, access, review gate, and stop rules in one brief.'],
  ['Matching', 'Review the operator', 'Compare professionals against the workflow, software, and communication needs.'],
  ['Launch', 'Start with a sample', 'Begin with a bounded batch, measured handoffs, and accountable review.'],
];

const faqs = [
  ['What can a remote sales development representative support?', 'Remote staff can research approved sources, prepare prospect lists, maintain approved sequences, route responses, update authorized CRM fields, and coordinate meetings.'],
  ['Can remote staff make pricing or contract commitments?', 'No. Pricing, discounts, qualification standards, legal conclusions, contracts, binding promises, and strategic account decisions remain with authorized owners.'],
  ['Can we begin with one workflow?', 'Yes. A narrow first workflow makes source quality, exclusions, consent, review, and escalation easier to test before the role expands.'],
  ['How do you approach outreach compliance?', 'Your organization defines lawful basis, consent, suppression rules, approved channels, scripts, and recordkeeping. Remote staff operate inside those controls and escalate exceptions.'],
];

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `https://${site.domain}/contact-us`,
  };

  return (
    <main className="sg-page contact-page">
      <section className="sg-contact-hero">
        <div className="sg-container sg-contact-grid">
          <div className="sg-contact-copy">
            <p className="sg-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Contact</span></p>
            <p className="sg-eyebrow sg-eyebrow--light">{site.eyebrow}</p>
            <h1>Turn one recurring prospecting queue into a clear support role.</h1>
            <p className="sg-hero-lead">Tell us where research, list preparation, outreach operations, CRM upkeep, scheduling, or quality review is consuming seller attention.</p>
            <ul className="sg-contact-tags">
              <li>Map the queue and current owner</li>
              <li>Separate preparation from accountable judgment</li>
              <li>Define access, output, review, and escalation</li>
            </ul>
            <div className="sg-contact-notes">
              <div><span>Conversation</span><strong>30 minutes with a staffing lead</strong></div>
              <div><span>Bring</span><strong>One queue, its owner, and known exceptions</strong></div>
            </div>
            <div className="sg-contact-direct">
              <span>Prefer email?</span>
              <a href="mailto:hello@salesdevelopmentrep.com">hello@salesdevelopmentrep.com</a>
            </div>
          </div>

          <div className="sg-form-card" id="brief">
            <p className="sg-eyebrow">Consultation brief</p>
            <h2>Tell us about the work.</h2>
            <p className="sg-form-note">Share enough to prepare a useful staffing conversation. Do not include customer records, credentials, or payment information.</p>
            <LeadForm source="contact-page-consultation" />
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--paper">
        <div className="sg-container">
          <div className="sg-head" data-reveal>
            <div><p className="sg-eyebrow">A controlled path forward</p><h2>What happens after you reach out.</h2></div>
            <p>Every step keeps the work, the reviewer, and the decision owner visible.</p>
          </div>
          <div className="sg-process">
            {steps.map(([label, title, body]) => (
              <article className="sg-step" key={label} data-reveal>
                <span className="sg-step-dot" aria-hidden="true">{label}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsRail />

      <section className="sg-section">
        <div className="sg-container sg-team">
          <figure className="sg-team-media" data-tilt data-tilt-strength="2">
            <img src="/images/stealth-agents-team-bacolod.jpg" alt="StealthAgents team in Bacolod" loading="lazy" />
            <figcaption>Official team · Bacolod City</figcaption>
          </figure>
          <div className="sg-team-copy" data-reveal>
            <p className="sg-eyebrow">Managed support with human oversight</p>
            <h2>A real team behind the staffing layer.</h2>
            <p>StealthAgents recruits, employs, and supports the Philippines-based professionals delivered through {site.name}. Your organization defines the systems, permitted access, decision rights, quality standard, and commercial authority.</p>
            <p>{site.name} remains the focused identity for this sales development service.</p>
            <Link className="sg-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Meet the parent company ↗</Link>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--deep">
        <div className="sg-container sg-boundary">
          <div>
            <p className="sg-eyebrow sg-eyebrow--light">Accountability stays clear</p>
            <h2>What moves, and what stays with your team.</h2>
          </div>
          <div className="sg-boundary-cols">
            <div>
              <h3>Preparation can move</h3>
              <p>Research approved sources, prepare lists, maintain approved sequences, route replies, update authorized CRM fields, and coordinate calendars.</p>
            </div>
            <div>
              <h3>Authority stays in-house</h3>
              <p>Targeting criteria, lawful data use, privacy, security, consent, suppression, messaging approval, pricing, contracts, supervision, and customer commitments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container sg-faq-layout">
          <div>
            <p className="sg-eyebrow">Sales development staffing questions</p>
            <h2>Plan with the boundary visible.</h2>
          </div>
          <div className="faq">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="sg-cta">
        <div className="sg-container sg-cta-inner">
          <div><p className="sg-eyebrow">Start with one queue</p><h2>Bring the workflow. Leave with a role brief.</h2><p>We will help identify the inputs, owner boundary, output, and first review sample.</p></div>
          <div className="sg-cta-actions"><Link className="sg-btn" href="#brief">Write the brief <ArrowIcon /></Link><Link className="sg-link" href="/services">Compare every service</Link></div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
