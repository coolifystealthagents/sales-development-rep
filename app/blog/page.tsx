import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical field notes for building controlled sales development workflows.',
  alternates: { canonical: '/blog' },
};

const fmt = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));

export default function BlogPage() {
  return (
    <main className="sg-page">
      <section className="sg-page-hero">
        <div className="sg-container sg-page-grid">
          <div className="sg-page-copy">
            <p className="sg-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Blog</span></p>
            <p className="sg-eyebrow sg-eyebrow--light">Sales development field notes</p>
            <h1>Clearer queues. Better handoffs.</h1>
            <p className="sg-hero-lead">Guides for revenue teams that want to delegate recurring prospecting work without losing evidence, visibility, or control.</p>
            <div className="sg-actions"><Link className="sg-btn sg-btn--amber" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-btn sg-btn--ghost" href="/services">Inspect the roles</Link></div>
          </div>
          <figure className="sg-page-media" data-tilt data-tilt-strength="3">
            <img src="/images/heroes/blog-sales-research-1600.webp" alt="A planner and pen beside a laptop during sales research" />
            <figcaption>{blogPosts.length} field notes · reviewed weekly</figcaption>
          </figure>
        </div>
      </section>

      <section className="sg-section sg-section--paper">
        <div className="sg-container">
          <div className="sg-head" data-reveal>
            <div><p className="sg-eyebrow">The archive</p><h2>Browse practical operating guides.</h2></div>
            <p>Each note examines a real handoff, decision boundary, or quality-control problem inside prospecting operations.</p>
          </div>
          <div className="sg-index-grid">
            {blogPosts.map((post, index) => (
              <Link className="sg-index-card" href={`/blog/${post.slug}`} key={post.slug} data-reveal style={{ '--sg-delay': `${Math.min(index, 6) * 40}ms` } as React.CSSProperties}>
                <div className="sg-index-meta"><span>{post.category}</span><time dateTime={post.publishedAt}>{fmt(post.publishedAt)}</time></div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="sg-index-foot"><span>{post.readTime}</span><span className="sg-index-arrow" aria-hidden="true">↗</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-cta">
        <div className="sg-container sg-cta-inner">
          <div><p className="sg-eyebrow">From guidance to a working role</p><h2>Turn the reading into a controlled handoff.</h2><p>Bring the queue, systems, current owner, and known exceptions.</p></div>
          <div className="sg-cta-actions"><Link className="sg-btn" href="/contact-us">Plan a consultation <ArrowIcon /></Link><Link className="sg-link" href="/research">Read the research</Link></div>
        </div>
      </section>
    </main>
  );
}
