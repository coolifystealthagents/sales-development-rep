import type { Metadata } from 'next';
import { researchPosts } from '@/lib/content';
import { TopicVisual } from '@/components/TopicVisual';
import { BlogCard } from '@/components/BlogCard';
import { HeroPhoto } from '@/components/HeroPhoto';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Source-led research on sales development operations, evidence, and review controls.',
  alternates: { canonical: '/research' },
};

export default function ResearchPage() {
  return <main className="research-page">
    <header className="page-hero split-hero">
      <div>
        <p className="eyebrow">Research library</p>
        <h1>Evidence for more inspectable pipeline operations.</h1>
        <p>Source-led briefs that turn public guidance and operating patterns into questions your revenue team can test.</p>
      </div>
      <HeroPhoto role="research" alt="Person seated at a computer with dashboards on screen"/>
    </header>
    <section className="content-wrap">
      <div className="index-intro">
        <h2>Review the evidence library</h2>
        <p>Methods, limitations, findings, and source links remain visible so interpretation does not outrun the observation.</p>
      </div>
      <div className="article-grid editorial-index">
        {researchPosts.map(post => <BlogCard
          key={post.slug}
          href={`/research/${post.slug}`}
          title={post.title}
          description={post.summary}
          headingLevel="h2"
          media={post.thumbnail ? <img src={post.thumbnail} width="1200" height="630" alt=""/> : <TopicVisual compact title={post.title} seed={post.slug}/>}
          category={post.cluster}
          meta={<><time dateTime={post.publishedAt}>{post.publishedAt}</time> · Research brief</>}
          linkLabel="Review the brief"
        />)}
      </div>
    </section>
  </main>;
}
