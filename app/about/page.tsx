import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About our operating model',
  description: `How ${site.name} and StealthAgents approach controlled sales development support.`,
  alternates: { canonical: '/about' },
};

const principles = [
  ['Source', 'Every claim has a home', 'Prospect records carry the source, observation date, and the fields that were actually verified.'],
  ['Boundary', 'Preparation is not authority', 'Research, lists, records, and coordination can move. Qualification and commitments cannot.'],
  ['Review', 'One named reviewer', 'Each prepared batch is accepted or returned against a written standard, not a feeling.'],
  ['Access', 'Minimum permissions', 'Named accounts, approved tools, and no shortcuts around consent or suppression rules.'],
];

export default function AboutPage() {
  return (
    <main className="sg-page about-page">
      <section className="sg-page-hero">
        <div className="sg-container sg-page-grid">
          <div className="sg-page-copy">
            <p className="sg-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>About</span></p>
            <p className="sg-eyebrow sg-eyebrow--light">About {site.name}</p>
            <h1>Better delegation starts with a better role brief.</h1>
            <p className="sg-hero-lead">We help revenue teams turn recurring preparation and coordination into focused remote roles with clear evidence, owners, and review points.</p>
            <div className="sg-actions"><Link className="sg-btn sg-btn--amber" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-btn sg-btn--ghost" href="/services">Inspect the roles</Link></div>
          </div>
          <figure className="sg-page-media" data-tilt data-tilt-strength="3">
            <img src="/images/stealth-agents-team.webp" alt="The StealthAgents managed service team in Bacolod" />
            <figcaption>Managed team · Bacolod City</figcaption>
          </figure>
        </div>
      </section>

      <section className="sg-section sg-section--paper">
        <div className="sg-container sg-statement">
          <h2 data-reveal>Start with the workflow, not a generic <em>task list.</em></h2>
          <div className="sg-statement-copy" data-reveal>
            <p>The useful question is not whether a remote assistant can do sales work. It is which preparation, coordination, documentation, and review tasks can move without transferring strategy or commercial authority.</p>
            <p>A role becomes manageable when the source, queue, output, reviewer, and escalation path are written in terms the team can use during real work. That is the brief we build before anyone is matched.</p>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="sg-head" data-reveal>
            <div><p className="sg-eyebrow">Four operating commitments</p><h2>The controls that make delegation reviewable.</h2></div>
            <p>Each commitment answers a question a reviewer will ask in week one.</p>
          </div>
          <div className="sg-principles-grid">
            {principles.map(([label, title, body]) => (
              <article key={label} data-reveal>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--deep">
        <div className="sg-container sg-team">
          <figure className="sg-team-media" data-tilt data-tilt-strength="2">
            <img src="/images/stealth-agents-team-bacolod.jpg" alt="StealthAgents team in Bacolod" loading="lazy" />
            <figcaption>Official team · Bacolod City</figcaption>
          </figure>
          <div className="sg-team-copy" data-reveal>
            <p className="sg-eyebrow sg-eyebrow--light">Powered by StealthAgents</p>
            <h2>A managed staffing layer behind the specialist identity.</h2>
            <p>StealthAgents recruits, employs, and supports the Philippines-based professionals who deliver this work. {site.name} focuses that operating model on the prospecting workflows, controls, and boundaries that matter to revenue teams.</p>
            <p>Your organization remains the decision owner: targeting, data use, privacy, consent, security, messaging, qualification, pricing, contracts, supervision, and customer commitments.</p>
            <Link className="sg-link sg-link--light" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Meet the parent company ↗</Link>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="sg-head" data-reveal>
            <div><p className="sg-eyebrow">How a launch runs</p><h2>Small first batch. Written acceptance. Then scale.</h2></div>
            <p>Scope expands on evidence, not enthusiasm.</p>
          </div>
          <div className="sg-process">
            {[
              ['Brief', 'Write the role', 'Queue, sources, output, reviewer, stop rule, and escalation path on one page.'],
              ['Sample', 'Test the handoff', 'A bounded batch with every unknown preserved for review.'],
              ['Review', 'Accept or return', 'The named reviewer checks evidence against the written standard.'],
              ['Expand', 'Add volume', 'Only after the handoff is steady and exceptions are understood.'],
            ].map(([label, title, body]) => (
              <article className="sg-step" key={label} data-reveal>
                <span className="sg-step-dot" aria-hidden="true">{label}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-cta">
        <div className="sg-container sg-cta-inner">
          <div><p className="sg-eyebrow">Design the role around reality</p><h2>Bring one recurring workflow to a focused conversation.</h2><p>We will help identify the inputs, owner boundary, output, and first review sample.</p></div>
          <div className="sg-cta-actions"><Link className="sg-btn" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-link" href="/services">Inspect the work lanes</Link></div>
        </div>
      </section>
    </main>
  );
}
