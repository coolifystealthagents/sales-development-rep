import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { researchPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing specialist support roles.' };

export default function ResearchPage() {
  return <main><header className="page-hero"><p className="eyebrow">Research library</p><h1>Evidence for better operating decisions.</h1><p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p></header><section className="content-wrap content-grid">{researchPosts.map((post) => <Link className="content-card research-card" href={`/research/${post.slug}`} key={post.slug}>{post.thumbnail && <Image className="card-thumbnail" src={post.thumbnail} alt="" width={1200} height={630} />}<span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><time dateTime={post.publishedAt}>{post.publishedAt}</time><span className="text-link">Review the brief</span></Link>)}</section></main>;
}
