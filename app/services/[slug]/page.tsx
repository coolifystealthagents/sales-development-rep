import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { ServiceWorkflowPhoto } from '@/components/ServiceWorkflowPhoto';
import { ArrowIcon } from '@/components/Icons';
import './detail.css';

export function generateStaticParams() {
  return site.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` } } : {};
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="dossier-list">
      <h3>{title}</h3>
      <ul className="signal-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map((item) => serviceBySlug(item)).filter(Boolean);

  return (
    <main className="service-detail">
      <header className="page-hero split-hero">
        <div>
          <p className="eyebrow">Specialist sales development role</p>
          <h1>{service.name}</h1>
          <p>{service.short}</p>
          <p className="service-flow">
            <span>{service.visual.intake}</span>
            <span>{service.visual.process}</span>
            <span>{service.visual.output}</span>
          </p>
          <Link className="button primary" href="/contact-us">Discuss this role <ArrowIcon /></Link>
        </div>
        <ServiceWorkflowPhoto slug={service.slug} variant="hero" />
      </header>

      <section className="service-facts" aria-label="Role snapshot">
        <div><span>Built for</span><strong>{service.audience}</strong></div>
        <div><span>Prepared output</span><strong>{service.deliverables[0]}</strong></div>
        <div><span>Review owner</span><strong>Your team approves every handoff</strong></div>
        <div><span>Access</span><strong>Named accounts and minimum permissions</strong></div>
      </section>

      <div className="service-dossier">
      <nav className="service-rail" aria-label="On this page">
        <div className="service-rail-inner">
          <a href="#overview">Overview</a>
          <a href="#scope">Scope</a>
          <a href="#workflow">Workflow</a>
          <a href="#controls">Controls</a>
          <a href="#examples">Examples</a>
          <a href="#questions">Questions</a>
          <a href="#related">Related</a>
          <a className="rail-cta" href="/contact-us">Scope this role ↗</a>
        </div>
      </nav>

      <div className="service-body">
        <section className="service-block" id="overview">
          <div className="service-block-head">
            <div>
              <p className="eyebrow">Audience and problem</p>
              <h2>Where this role creates useful capacity.</h2>
            </div>
            <p>The work moves into a defined queue with a named reviewer. Authority over targeting, qualification, and commercial calls stays with your team.</p>
          </div>
          <div className="service-block-body service-intro-copy">
            <p><strong>Built for:</strong> {service.audience}</p>
            <p>{service.problem}</p>
          </div>
        </section>

        <section className="service-block" id="scope">
          <div className="service-block-head">
            <div>
              <p className="eyebrow">Scope of the role</p>
              <h2>What enters the queue, and what leaves it.</h2>
            </div>
            <p>Both sides are written down before the first batch so a reviewer can accept or return the work without guessing.</p>
          </div>
          <div className="service-block-body service-two-col">
            <ListBlock title="Inputs required" items={service.inputs} />
            <ListBlock title="Scope of work" items={service.tasks} />
          </div>
        </section>

        <section className="service-block service-block--ink" id="workflow">
          <div className="service-block-head">
            <div>
              <p className="eyebrow">Working sequence</p>
              <h2>A workflow the owner can inspect.</h2>
            </div>
            <p>Each step leaves evidence behind, so the reviewer can see the source, the decision, and the exceptions.</p>
          </div>
          <div className="service-block-body">
            <ol className="workflow-list">
              {service.workflow.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </section>

        <section className="service-block" id="controls">
          <div className="service-block-head">
            <div>
              <p className="eyebrow">Deliverables and boundaries</p>
              <h2>What arrives, and who decides.</h2>
            </div>
            <p>Deliverables are reviewable artifacts. Boundaries name the decisions that never leave your organization.</p>
          </div>
          <div className="service-block-body service-two-col service-two-col--split">
            <ListBlock title="Deliverables" items={service.deliverables} />
            <div className="dossier-list dossier-list--gate">
              <h3>Owner decision boundaries</h3>
              <ul className="signal-list">{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <div className="service-quality">
            <h3>Quality controls</h3>
            <ul>{service.qualityControls.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="service-block" id="examples">
          <div className="service-block-head">
            <div>
              <p className="eyebrow">Operating examples</p>
              <h2>How the boundary works in practice.</h2>
            </div>
            <p>Short case notes show where the role stops and the owner steps in.</p>
          </div>
          <div className="service-block-body scenario-grid">
            {service.scenarios.map((scenario) => (
              <article key={scenario.title}>
                <h3>{scenario.title}</h3>
                <p>{scenario.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-block service-faq" id="questions">
          <div className="service-faq-head">
            <p className="eyebrow">Role questions</p>
            <h2>Frequently asked questions</h2>
            <p>If a question is not answered here, bring it to the scoping call with the workflow and the current owner.</p>
          </div>
          <div className="faq">
            {service.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-block" id="related">
          <div className="service-block-head">
            <div>
              <p className="eyebrow">Related services</p>
              <h2>Connect the adjacent handoffs.</h2>
            </div>
            <p>Most teams start with one queue, then add the role that receives or feeds it.</p>
          </div>
          <div className="service-block-body related-grid related-grid--dossier">
            {related.map((item) => item && (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                <div className="related-media"><ServiceWorkflowPhoto slug={item.slug} variant="home" /></div>
                <div className="related-copy">
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                  <span className="text-link">Review this role <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      </div>

      <section className="closing">
        <p className="eyebrow">Create a controlled first workflow</p>
        <h2>Turn this scope into a role brief.</h2>
        <p>Bring the queue, systems, current owner, and known exceptions.</p>
        <ul className="closing-brief">
          <li>One recurring queue</li>
          <li>Its current owner</li>
          <li>The first review sample</li>
        </ul>
        <Link className="button primary" href="/contact-us">Plan a consultation <ArrowIcon /></Link>
      </section>
    </main>
  );
}
