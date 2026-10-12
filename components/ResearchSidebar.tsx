import Link from 'next/link';
import type { ResearchPost } from '@/lib/types';

export function ResearchSidebar({ post }: { post: ResearchPost }) {
  return <aside className="sidebar research-sidebar" aria-label="Research companion"><p className="eyebrow">Research reading check</p><h3>Keep observation and interpretation separate.</h3><ul><li>Confirm the observation unit.</li><li>Keep unknown states visible.</li><li>Trace codes back to evidence.</li><li>Read limits beside findings.</li></ul><p className="sidebar-meta">{post.cluster} · {post.sources.length} public sources</p><Link className="button" href="/research">Browse all research</Link></aside>;
}
