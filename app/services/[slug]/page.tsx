import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { ServiceWorkflowPhoto } from '@/components/ServiceWorkflowPhoto';
import { ArrowIcon } from '@/components/Icons';

export function generateStaticParams() {
  return site.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  } : {};
}

function DetailRow({ eyebrow, title, className, children }: {
  eyebrow?: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return <section className={`service-detail-row${className ? ` ${className}` : ''}`}>
    <div className="service-section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
    <div className="service-section-content">{children}</div>
  </section>;
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <DetailRow title={title}>
    <ul className="signal-list">{items.map(item => <li key={item}>{item}</li>)}</ul>
  </DetailRow>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map(item => serviceBySlug(item)).filter(Boolean);

  return <main className="service-detail">
    <header className="page-hero split-hero">
      <div>
        <p className="eyebrow">Specialist sales development role</p>
        <h1>{service.name}</h1>
        <p>{service.short}</p>
        <Link className="button primary" href="/contact-us">Discuss this role <ArrowIcon/></Link>
      </div>
      <ServiceWorkflowPhoto slug={service.slug} variant="hero"/>
    </header>

    <section className="section service-intro">
      <div>
        <p className="eyebrow">Audience and problem</p>
        <h2>Where this role creates useful capacity.</h2>
      </div>
      <div>
        <p><strong>Built for:</strong> {service.audience}</p>
        <p>{service.problem}</p>
      </div>
    </section>

    <div className="service-prose">
      <ListBlock title="Inputs required" items={service.inputs}/>
      <ListBlock title="Scope of work" items={service.tasks}/>

      <DetailRow eyebrow="Working sequence" title="A workflow the owner can inspect.">
        <ol className="workflow-list">{service.workflow.map(step => <li key={step}>{step}</li>)}</ol>
      </DetailRow>

      <ListBlock title="Deliverables" items={service.deliverables}/>
      <ListBlock title="Owner decision boundaries" items={service.boundaries}/>
      <ListBlock title="Quality controls" items={service.qualityControls}/>

      <DetailRow eyebrow="Operating examples" title="How the boundary works in practice.">
        <div className="scenario-grid">{service.scenarios.map(scenario => <article key={scenario.title}>
          <h3>{scenario.title}</h3>
          <p>{scenario.body}</p>
        </article>)}</div>
      </DetailRow>

      <DetailRow eyebrow="Role questions" title="Frequently asked questions" className="faq">
        {service.faq.map(item => <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>)}
      </DetailRow>

      <DetailRow eyebrow="Related services" title="Connect the adjacent handoffs.">
        <div className="related-grid">{related.map(item => item && <Link key={item.slug} href={`/services/${item.slug}`}>
          <h3>{item.name}</h3>
          <p>{item.short}</p>
          <span className="text-link">Review this role <ArrowIcon/></span>
        </Link>)}</div>
      </DetailRow>
    </div>

    <section className="closing">
      <div className="service-closing-inner">
        <p className="eyebrow">Create a controlled first workflow</p>
        <h2>Turn this scope into a role brief.</h2>
        <p>Bring the queue, systems, current owner, and known exceptions.</p>
        <Link className="button primary" href="/contact-us">Plan a consultation <ArrowIcon/></Link>
      </div>
    </section>
  </main>;
}
