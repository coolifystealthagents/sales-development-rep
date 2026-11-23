import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon } from './Icons';
import { ServiceWorkflowPhoto } from './ServiceWorkflowPhoto';
import { TestimonialsRail } from './TestimonialsRail';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <Link id={id} className="sg-btn sg-btn--amber" href="/contact-us">{children} <ArrowIcon /></Link>
);

const metrics = [
  ['Source', 'Approved accounts, contacts, and evidence'],
  ['Owner', 'Seller or manager keeps qualification and commercial calls'],
  ['Review', 'One named reviewer accepts each prepared batch'],
  ['Access', 'Named accounts and minimum permissions'],
];
const steps = [
  ['Scope', 'Name the queue', 'One workflow, its inputs, owner, stop rule, and review evidence.'],
  ['Match', 'Review the operator', 'Match source discipline, software, communication, and review needs.'],
  ['Pilot', 'Run a small batch', 'Limited access, preserved exceptions, and daily review before volume.'],
  ['Expand', 'Add work after evidence', 'Broaden scope only when quality and ownership stay visible.'],
];

export function HomePage() {
  return (
    <main className="sg-home">
      <section className="sg-hero">
        <div className="sg-container sg-hero-grid">
          <div className="sg-hero-copy">
            <p className="sg-eyebrow sg-eyebrow--light">{site.eyebrow}</p>
            <h1>{site.hero}<em>{site.heroAccent}</em></h1>
            <p className="sg-hero-lead">{site.heroBody}</p>
            <div className="sg-actions"><CTA id="cta-home-hero-bookcall">Plan a consultation</CTA><Link className="sg-btn sg-btn--ghost" href="/services">Inspect the roles</Link></div>
            <ul className="sg-principles">{site.principles.map((item: string) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="sg-scene" aria-label="Pipeline board showing research, outreach, and owner review">
            <span className="sg-orbit" aria-hidden="true" />
            <div className="sg-board" data-tilt data-tilt-strength="3">
              <div className="sg-board-head"><span>Pipeline control</span><b>LIVE QUEUE · 06</b></div>
              <div className="sg-board-cols">
                <div className="sg-col"><span>Sourced <b>12</b></span>
                  <div className="sg-deal"><strong>Northwind Ops</strong><span>VP Operations · source ✓</span></div>
                  <div className="sg-deal"><strong>Halcyon Labs</strong><span>Head of RevOps · source ✓</span></div>
                  <div className="sg-deal"><strong>Fieldstone</strong><span>COO · needs review</span></div>
                </div>
                <div className="sg-col"><span>Working <b>08</b></span>
                  <div className="sg-deal sg-deal--match"><strong>Atlas Freight</strong><span>Approved sequence</span></div>
                  <div className="sg-deal"><strong>Beacon Health</strong><span>Reply routed</span></div>
                  <div className="sg-deal sg-deal--match"><strong>Vela Systems</strong><span>Meeting held</span></div>
                </div>
                <div className="sg-col"><span>Owner gate <b>03</b></span>
                  <div className="sg-deal sg-deal--owner"><strong>Pricing question</strong><span>Seller decision</span></div>
                  <div className="sg-deal sg-deal--owner"><strong>Novel reply</strong><span>Manager review</span></div>
                  <div className="sg-deal sg-deal--match"><strong>Booked call</strong><span>Context attached</span></div>
                </div>
              </div>
            </div>
            <div className="sg-owner-chip" data-depth="12"><span className="sg-chip-dot" aria-hidden="true">✓</span><div><span>Owner decision</span><strong>Your team keeps it</strong></div></div>
            <div className="sg-signal-card" data-depth="7"><span>Signal quality</span><strong>Review-ready</strong><div className="sg-signal-bars"><span /><span /><span /></div></div>
          </div>
        </div>
        <div className="sg-marquee" aria-hidden="true"><div className="sg-marquee-track">{[0,1].map(group => <div className="sg-marquee-group" key={group}>{['Approved source','List quality','Outreach queue','CRM evidence','Owner gate','Recorded handoff'].map(item => <span key={`${group}-${item}`}>{item}</span>)}</div>)}</div></div>
      </section>

      <section className="sg-section sg-section--paper"><div className="sg-container">
        <div className="sg-statement"><h2 data-reveal>Capacity starts with a boundary sellers can <em>trust.</em></h2><div className="sg-statement-copy" data-reveal><p>Sales development support works best when the assistant owns repeatable preparation and the revenue team retains targeting, qualification, commercial judgment, and customer commitments.</p><p>Approved sources, written acceptance rules, and a named reviewer keep the handoff useful. The work moves. Authority does not.</p></div></div>
        <div className="sg-metrics" data-reveal>{metrics.map(([k,v]) => <div className="sg-metric" key={k}><strong>{k}</strong><span>{v}</span></div>)}</div>
      </div></section>

      <section className="sg-section" id="roles"><div className="sg-container">
        <div className="sg-head" data-reveal><div><p className="sg-eyebrow">Specialist work lanes</p><h2>Match the support role to the queue.</h2></div><p>Each lane names the inputs, prepared output, control points, and owner decisions before work begins.</p></div>
        <div className="sg-services">{site.services.map(service => <Link className="sg-service" href={`/services/${service.slug}`} key={service.slug} data-tilt data-tilt-strength="2.5" data-reveal><div className="sg-service-media"><ServiceWorkflowPhoto slug={service.slug} variant="home"/><span>{service.visual.intake}</span></div><div className="sg-service-body"><h3>{service.name}</h3><p>{service.short}</p><div className="sg-service-foot"><span>{service.deliverables[0]}</span><span className="sg-service-arrow" aria-hidden="true">↗</span></div></div></Link>)}</div>
      </div></section>

      <section className="sg-section sg-section--deep"><div className="sg-container sg-manual">
        <figure className="sg-manual-media" data-tilt data-tilt-strength="2"><img src="/images/heroes/home-outbound-outreach-1600.webp" alt="Professionals using headsets and laptops for outbound outreach" loading="lazy"/></figure>
        <div className="sg-manual-copy" data-reveal><p className="sg-eyebrow sg-eyebrow--light">The prospecting field manual</p><h2>A useful handoff shows what enters, what gets checked, and who decides.</h2><p>Do not begin with an unbounded task list. Begin with one recurring queue, define acceptable evidence, name the output, and tell the assistant exactly when to stop and escalate.</p><div className="sg-manual-list"><div><span>Enters</span><p>Approved target criteria, source rules, required fields, exclusions, and the current owner.</p></div><div><span>Checked</span><p>Source provenance, required evidence, duplicate and suppression rules, and exception handling.</p></div><div><span>Decides</span><p>Your seller or manager keeps qualification, messaging claims, pricing, and commercial commitments.</p></div></div><Link className="sg-link sg-link--light" href="/about">Read the operating model</Link></div>
      </div></section>

      <section className="sg-section"><div className="sg-container"><div className="sg-head" data-reveal><div><p className="sg-eyebrow">A controlled launch</p><h2>Start with one queue and a small review sample.</h2></div><p>Add scope only when the first handoff has evidence behind it.</p></div><div className="sg-process">{steps.map(([label,title,body]) => <article className="sg-step" key={label} data-reveal><span className="sg-step-dot" aria-hidden="true">{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="sg-section sg-section--paper"><div className="sg-container sg-team"><figure className="sg-team-media" data-tilt data-tilt-strength="2"><img src="/images/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team in Bacolod" loading="lazy"/><figcaption>Official team · Bacolod City</figcaption></figure><div className="sg-team-copy" data-reveal><p className="sg-eyebrow">Managed support behind the role</p><h2>A real team behind the staffing layer.</h2><p>StealthAgents recruits and supports the Philippines-based professionals delivered through Sales Development Rep. Your organization defines systems, permitted access, commercial authority, and acceptance standards.</p><p>The operator works inside approved tools, records sources and exceptions, and returns a review-ready handoff.</p><Link className="sg-link" href="/contact-us">Talk through the role ↗</Link></div></div></section>

      <TestimonialsRail />

      <section className="sg-section"><div className="sg-container"><div className="sg-head" data-reveal><div><p className="sg-eyebrow">Recent field notes</p><h2>Guidance for inspectable prospecting systems.</h2></div><p>Planning notes for the person who has to review the work.</p></div><div className="sg-posts">{blogPosts.slice(0,3).map(post => <Link className="sg-post" href={`/blog/${post.slug}`} key={post.slug} data-reveal><img src={post.thumbnail || '/images/heroes/home-outbound-outreach-960.webp'} alt="" loading="lazy"/><div className="sg-post-body"><span className="sg-post-meta">7 minute guide</span><h3>{post.title}</h3><p>{post.description}</p><span className="sg-link">Read the guide ↗</span></div></Link>)}</div></div></section>

      <section className="sg-cta"><div className="sg-container sg-cta-inner"><div data-reveal><p className="sg-eyebrow">Start with one queue</p><h2>Turn recurring prospecting work into a controlled role brief.</h2><p>Bring the systems, current owner, acceptance standard, and known exceptions.</p></div><div className="sg-cta-actions" data-reveal><CTA id="cta-home-closing-schedulecall">Plan a consultation</CTA><Link className="sg-link" href="/services">Inspect the work lanes</Link></div></div></section>
    </main>
  );
}
