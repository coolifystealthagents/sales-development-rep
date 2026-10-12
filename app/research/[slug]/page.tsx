import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ResearchSidebar } from '@/components/ResearchSidebar';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary, alternates: { canonical: `/research/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.summary, publishedTime: post.publishedAt, images: post.thumbnail ? [post.thumbnail] : undefined } };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  const related = researchPosts.filter((item) => item.slug !== post.slug).sort((a, b) => Number(b.cluster === post.cluster) - Number(a.cluster === post.cluster)).slice(0, 3);
  return <main>
    <header className="page-hero article-hero"><p className="eyebrow">Home / Research / {post.cluster}</p><h1>{post.title}</h1><p>{post.summary}</p><p className="meta">{site.name} Editorial Team · Published <time dateTime={post.publishedAt}>{post.publishedAt}</time></p>{post.thumbnail && <Image className="article-thumbnail" src={post.thumbnail} alt={`${post.title} research cover`} width={1200} height={630} priority />}</header>
    <section className="content-wrap article-layout"><article className="prose"><p className="research-finding">{post.finding}</p>{post.sections ? post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>) : <><h2>What this brief examines</h2><p>This brief connects public guidance with operating questions leaders face when they divide work across an in-house team and remote support. It does not replace professional advice.</p><h2>Questions to test inside your workflow</h2><ul><li>Which steps involve preparation, coordination, or documentation?</li><li>Which decisions require an accountable owner?</li><li>What evidence should a reviewer see before work is accepted?</li><li>Which exceptions need an explicit escalation path?</li></ul><h2>Practical interpretation</h2><p>A useful support role is defined by the boundary between repeatable preparation and accountable judgment. Teams can make that boundary visible through checklists, source records, and quality samples.</p><h2>Method note</h2><p>We reviewed the public sources below for guidance relevant to the topic, then translated recurring operational ideas into role-design questions. No private client data or invented performance figures were used.</p></>}
      <div className="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></div><Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow in a free call</Link></article><ResearchSidebar post={post} /></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Related research</p><h2>Continue with the evidence.</h2></div><div className="article-grid">{related.map((item) => <Link className="article-card" href={`/research/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.summary}</p></Link>)}</div></section>
  </main>;
}
