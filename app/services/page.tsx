import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
import { ServiceWorkflowPhoto } from '@/components/ServiceWorkflowPhoto';

export const metadata: Metadata = {
  title: 'Sales development support services',
  description: 'Explore specialist remote roles for prospect research, list quality, outreach operations, CRM hygiene, meeting coordination, and sequence review.',
  alternates: { canonical: '/services' },
};

const faqs = [
  ['Where should a sales team begin?', 'Choose one recurring queue with known inputs, a clear output, an accountable owner, and a small review sample.'],
  ['Does remote support replace sales judgment?', 'No. Remote staff can prepare, coordinate, document, and route work. Your authorized leaders keep strategy, qualification, pricing, compliance, and customer commitments.'],
  ['How do we choose a role?', 'Start with the operating bottleneck. Research and list building improve preparation. Outreach and meeting coordination improve flow. CRM hygiene and sequence review improve control.'],
];
const process = [
  ['Scope', 'Name the queue', 'One workflow, its sources, output, owner, stop rule, and review evidence.'],
  ['Sample', 'Run a bounded batch', 'Keep every unknown and exception visible instead of guessing.'],
  ['Review', 'Inspect the evidence', 'Compare the prepared output with the acceptance checklist.'],
  ['Expand', 'Add work after control', 'Broaden access or volume only when the handoff is steady.'],
];

export default function ServicesPage() {
  return (
    <main className="sg-page services-page">
      <section className="sg-page-hero">
        <div className="sg-container sg-page-grid">
          <div className="sg-page-copy">
            <p className="sg-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Services</span></p>
            <p className="sg-eyebrow sg-eyebrow--light">Sales development field desk</p>
            <h1>Give recurring pipeline work a visible control path.</h1>
            <p className="sg-hero-lead">Build specialist support around sources, acceptance rules, owner boundaries, and handoffs your revenue team can inspect.</p>
            <div className="sg-actions"><Link className="sg-btn sg-btn--amber" href="/contact-us">Map your workflow <ArrowIcon /></Link></div>
          </div>
          <figure className="sg-page-media" data-tilt data-tilt-strength="3">
            <img src="/images/heroes/services-sales-workflow-1600.webp" alt="Professionals reviewing workflow notes and shared sales materials" />
            <figcaption>Approved source → review gate → owner decision</figcaption>
          </figure>
        </div>
      </section>

      <section className="sg-snapshot" aria-label="Service operating snapshot">
        <div className="sg-container sg-snapshot-grid">
          <article><span>Preparation</span><strong>Research, lists, sequences, records, and meeting context</strong></article>
          <article><span>Owner</span><strong>Your seller or manager keeps qualification and commercial calls</strong></article>
          <article><span>Review</span><strong>One named reviewer accepts each prepared batch</strong></article>
          <article><span>Access</span><strong>Named accounts and minimum permissions</strong></article>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="sg-head" data-reveal>
            <div><p className="sg-eyebrow">Six focused work lanes</p><h2>Match the role to the queue.</h2></div>
            <p>Each lane defines the inputs, work, prepared output, human boundary, and control points needed for a measured launch.</p>
          </div>
          <div className="sg-services">
            {site.services.map((service) => (
              <Link className="sg-service" href={`/services/${service.slug}`} key={service.slug} data-tilt data-tilt-strength="2.5" data-reveal>
                <div className="sg-service-media"><ServiceWorkflowPhoto slug={service.slug} variant="home" /><span>{service.visual.intake}</span></div>
                <div className="sg-service-body">
                  <h3>{service.name}</h3><p>{service.short}</p>
                  <div className="sg-service-foot"><span>{service.deliverables[0]}</span><span className="sg-service-arrow" aria-hidden="true">↗</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--paper">
        <div className="sg-container">
          <div className="sg-head" data-reveal><div><p className="sg-eyebrow">Decision guidance</p><h2>Find the first controlled handoff.</h2></div><p>If seller time disappears before conversations, begin with research or lists. If work stalls between touchpoints, begin with outreach operations or meeting coordination. If the system cannot explain what happened, begin with CRM hygiene or quality review.</p></div>
          <div className="sg-process">
            {process.map(([label, title, body]) => <article className="sg-step" key={label} data-reveal><span className="sg-step-dot" aria-hidden="true">{label}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--deep">
        <div className="sg-container sg-team">
          <figure className="sg-team-media" data-tilt data-tilt-strength="2"><img src="/images/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team in Bacolod" loading="lazy" /><figcaption>Official team · Bacolod City</figcaption></figure>
          <div className="sg-team-copy" data-reveal><p className="sg-eyebrow sg-eyebrow--light">Managed service support</p><h2>A real team behind the staffing layer.</h2><p>StealthAgents supports candidate matching and managed remote staffing while your organization defines systems, permitted access, commercial authority, and acceptance standards.</p><Link className="sg-link sg-link--light" href="/contact-us">Talk through the role ↗</Link></div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="sg-head" data-reveal><div><p className="sg-eyebrow">Service questions</p><h2>Plan with the boundary visible.</h2></div><p>Start with one queue and a named reviewer. Expand only when the first handoff is dependable.</p></div>
          <div className="faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="sg-cta"><div className="sg-container sg-cta-inner"><div><p className="sg-eyebrow">Start with the work</p><h2>Bring one queue that needs a clearer handoff.</h2><p>We will help turn it into a focused role brief with useful controls.</p></div><div className="sg-cta-actions"><Link className="sg-btn" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-link" href="/about">Read the operating model</Link></div></div></section>
    </main>
  );
}
