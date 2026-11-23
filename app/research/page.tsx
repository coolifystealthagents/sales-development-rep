import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Source-led research on sales development operations, evidence, and review controls.',
  alternates: { canonical: '/research' },
};

const fmt = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));

export default function ResearchPage() {
  return (
    <main className="sg-page research-page">
      <section className="sg-page-hero">
        <div className="sg-container sg-page-grid">
          <div className="sg-page-copy">
            <p className="sg-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Research</span></p>
            <p className="sg-eyebrow sg-eyebrow--light">Research library</p>
            <h1>Evidence for more inspectable pipeline operations.</h1>
            <p className="sg-hero-lead">Source-led briefs that turn public guidance and operating patterns into questions your revenue team can test.</p>
            <div className="sg-actions"><Link className="sg-btn sg-btn--amber" href="/contact-us">Test the model <ArrowIcon /></Link><Link className="sg-btn sg-btn--ghost" href="/blog">Read the field notes</Link></div>
          </div>
          <figure className="sg-page-media" data-tilt data-tilt-strength="3">
            <img src="/images/heroes/research-reporting-analysis-1600.webp" alt="Analyst reviewing dashboards and source material" />
            <figcaption>{researchPosts.length} briefs · sources linked</figcaption>
          </figure>
        </div>
      </section>

      <section className="sg-section sg-section--paper">
        <div className="sg-container">
          <div className="sg-head" data-reveal>
            <div><p className="sg-eyebrow">The evidence library</p><h2>Review the sources before the claims.</h2></div>
            <p>Methods, limitations, findings, and source links remain visible so interpretation does not outrun the observation.</p>
          </div>
          <div className="sg-index-grid">
            {researchPosts.map((post, index) => (
              <Link className="sg-index-card sg-index-card--research" href={`/research/${post.slug}`} key={post.slug} data-reveal style={{ '--sg-delay': `${Math.min(index, 6) * 40}ms` } as React.CSSProperties}>
                <div className="sg-index-meta"><span>{post.cluster}</span><time dateTime={post.publishedAt}>{fmt(post.publishedAt)}</time></div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <div className="sg-index-foot"><span>Research brief</span><span className="sg-index-arrow" aria-hidden="true">↗</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-cta">
        <div className="sg-container sg-cta-inner">
          <div><p className="sg-eyebrow">Turn evidence into a role</p><h2>Use the brief to write a sharper scope.</h2><p>Bring the workflow and the questions still unanswered.</p></div>
          <div className="sg-cta-actions"><Link className="sg-btn" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-link" href="/services">Inspect the work lanes</Link></div>
        </div>
      </section>
    </main>
  );
}
