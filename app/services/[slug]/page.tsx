import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { ServiceWorkflowPhoto } from '@/components/ServiceWorkflowPhoto';
import { ArrowIcon } from '@/components/Icons';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` } } : {};
}

function List({ title, items }: { title: string; items: string[] }) {
  return <section><h2>{title}</h2><ul className="signal-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map((item) => serviceBySlug(item)).filter(Boolean);

  return (
    <main className="sg-page service-detail">
      <section className="sg-page-hero">
        <div className="sg-container sg-page-grid">
          <div className="sg-page-copy">
            <p className="sg-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/services">Services</Link><span aria-hidden="true"> / </span><span>{service.name}</span></p>
            <p className="sg-eyebrow sg-eyebrow--light">Specialist sales development role</p>
            <h1>{service.name}</h1>
            <p className="sg-hero-lead">{service.short}</p>
            <div className="sg-actions"><Link className="sg-btn sg-btn--amber" href="/contact-us">Discuss this role <ArrowIcon /></Link><Link className="sg-btn sg-btn--ghost" href="#scope">Review the scope</Link></div>
            <ul className="sg-principles"><li>{service.visual.intake}</li><li>{service.visual.process}</li><li>{service.visual.output}</li></ul>
          </div>
          <figure className="sg-page-media" data-tilt data-tilt-strength="3">
            <ServiceWorkflowPhoto slug={service.slug} variant="hero" />
            <figcaption>{service.deliverables[0]} · {service.visual.output}</figcaption>
          </figure>
        </div>
      </section>

      <section className="sg-snapshot" aria-label="Role snapshot">
        <div className="sg-container sg-snapshot-grid">
          <article><span>Built for</span><strong>{service.audience}</strong></article>
          <article><span>Prepared output</span><strong>{service.deliverables[0]}</strong></article>
          <article><span>Review owner</span><strong>Your seller or manager approves the handoff</strong></article>
          <article><span>Access</span><strong>Named accounts and minimum permissions</strong></article>
        </div>
      </section>

      <nav className="sg-service-nav" aria-label="On this page">
        <div className="container">
          <a href="#overview">Overview</a><a href="#scope">Scope</a><a href="#workflow">Workflow</a><a href="#controls">Controls</a><a href="#examples">Examples</a><a href="#questions">Questions</a><a href="#related">Related</a>
          <a className="sg-service-nav-cta" href="/contact-us">Scope this role ↗</a>
        </div>
      </nav>

      <section className="sg-container service-intro" id="overview">
        <div><p className="sg-eyebrow">Audience and problem</p><h2>Where this role creates useful capacity.</h2></div>
        <div><p><strong>Built for:</strong> {service.audience}</p><p>{service.problem}</p></div>
      </section>

      <div className="container service-prose">
        <div className="service-two-col" id="scope"><List title="Inputs required" items={service.inputs} /><List title="Scope of work" items={service.tasks} /></div>
        <section id="workflow"><p className="sg-eyebrow">Working sequence</p><h2>A workflow the owner can inspect.</h2><ol className="workflow-list">{service.workflow.map((step) => <li key={step}>{step}</li>)}</ol></section>
        <div className="service-two-col" id="controls"><List title="Deliverables" items={service.deliverables} /><List title="Owner decision boundaries" items={service.boundaries} /></div>
        <List title="Quality controls" items={service.qualityControls} />
        <section id="examples"><p className="sg-eyebrow">Operating examples</p><h2>How the boundary works in practice.</h2><div className="scenario-grid">{service.scenarios.map((scenario) => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.body}</p></article>)}</div></section>
        <section className="faq" id="questions"><p className="sg-eyebrow">Role questions</p><h2>Frequently asked questions</h2>{service.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
        <section id="related"><p className="sg-eyebrow">Related services</p><h2>Connect the adjacent handoffs.</h2><div className="related-grid">{related.map((item) => item && <Link key={item.slug} href={`/services/${item.slug}`}><h3>{item.name}</h3><p>{item.short}</p><span className="sg-link">Review this role <ArrowIcon /></span></Link>)}</div></section>
      </div>

      <section className="sg-cta"><div className="sg-container sg-cta-inner"><div><p className="sg-eyebrow">Create a controlled first workflow</p><h2>Turn this scope into a role brief.</h2><p>Bring the queue, systems, current owner, and known exceptions.</p></div><div className="sg-cta-actions"><Link className="sg-btn" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-link" href="/services">Compare every service</Link></div></div></section>
    </main>
  );
}
