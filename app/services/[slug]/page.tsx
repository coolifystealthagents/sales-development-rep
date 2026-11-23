import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { ServiceWorkflowPhoto } from '@/components/ServiceWorkflowPhoto';
import { ArrowIcon } from '@/components/Icons';
import { ServiceIcon, type ServiceIconName } from '@/components/ServiceIcons';

const workflowIconNames: Record<string, readonly [ServiceIconName, ServiceIconName, ServiceIconName, ServiceIconName]> = {
  'prospect-research': ['inputs', 'checks', 'filter', 'related'],
  'list-building-enrichment': ['checks', 'list', 'filter', 'outputs'],
  'outreach-operations': ['outreach', 'checks', 'filter', 'related'],
  'crm-hygiene': ['scope', 'checks', 'crm', 'outputs'],
  'meeting-coordination': ['checks', 'calendar', 'outputs', 'related'],
  'sequence-quality-review': ['scope', 'checks', 'filter', 'related'],
};

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

function DetailRow({ eyebrow, title, icon, className, children }: {
  eyebrow?: string;
  title: string;
  icon: ServiceIconName;
  className?: string;
  children: ReactNode;
}) {
  return <section className={`service-detail-row${className ? ` ${className}` : ''}`}>
    <div className="service-section-heading">
      <ServiceIcon name={icon}/>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
    <div className="service-section-content">{children}</div>
  </section>;
}

function ListBlock({ eyebrow, title, icon, items, layout = 'list' }: {
  eyebrow: string;
  title: string;
  icon: ServiceIconName;
  items: string[];
  layout?: 'list' | 'cards';
}) {
  return <DetailRow eyebrow={eyebrow} title={title} icon={icon} className={`service-list-row service-list-row-${layout}`}>
    <ul className={`signal-list icon-list icon-list-${layout}`}>{items.map(item => <li key={item}>{item}</li>)}</ul>
  </DetailRow>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map(item => serviceBySlug(item)).filter(Boolean);

  return <main className="service-detail">
    <header className="page-hero split-hero service-detail-hero">
      <div>
        <p className="eyebrow">Specialist sales development role</p>
        <h1>{service.name}</h1>
        <p>{service.short}</p>
        <div className="service-hero-fit">
          <span>Best fit</span>
          <p>{service.audience}</p>
        </div>
        <Link className="button primary" href="/contact-us">Discuss this role <ArrowIcon/></Link>
      </div>
      <ServiceWorkflowPhoto slug={service.slug} variant="hero"/>
    </header>

    <section className="section service-intro">
      <div>
        <p className="eyebrow">Fit and operating need</p>
        <h2>A focused role for a visible queue.</h2>
      </div>
      <div>
        <p><strong>Built for:</strong> {service.audience}</p>
        <p>{service.problem}</p>
      </div>
    </section>

    <div className="service-prose">
      <ListBlock eyebrow="Scope of work" title="Work this role can own." icon="scope" items={service.tasks} layout="cards"/>
      <ListBlock eyebrow="Reviewable output" title="What your team receives." icon="outputs" items={service.deliverables} layout="cards"/>
      <ListBlock eyebrow="Starting inputs" title="What to provide at the start." icon="inputs" items={service.inputs}/>

      <DetailRow eyebrow="Working sequence" title="A workflow the owner can inspect." icon="checks" className="service-workflow-row">
        <ol className="workflow-list">{service.workflow.map((step, index) => <li key={step}>
          <ServiceIcon name={workflowIconNames[service.slug][index]}/>
          <span>{step}</span>
        </li>)}</ol>
      </DetailRow>

      <ListBlock eyebrow="Approval boundary" title="Decisions that stay with your team." icon="boundary" items={service.boundaries}/>
      <ListBlock eyebrow="Quality checks" title="How the work stays reviewable." icon="quality" items={service.qualityControls} layout="cards"/>

      <DetailRow eyebrow="Operating examples" title="How the boundary works in practice." icon="examples">
        <div className="scenario-grid">{service.scenarios.map(scenario => <article key={scenario.title}>
          <h3>{scenario.title}</h3>
          <p>{scenario.body}</p>
        </article>)}</div>
      </DetailRow>

      <DetailRow eyebrow="Role questions" title="Frequently asked questions" icon="questions" className="faq service-detail-faq">
        {service.faq.map(item => <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>)}
      </DetailRow>

      <DetailRow eyebrow="Related services" title="Connect the adjacent handoffs." icon="related">
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
