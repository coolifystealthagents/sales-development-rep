'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Heading = { id: string; label: string };
export function ArticleSidebar({ headings, kind, relatedHref, sources = [] }: { headings: Heading[]; kind: string; relatedHref: string; sources?: { label: string; url: string }[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? '');
  useEffect(() => { const nodes = headings.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]; const observer = new IntersectionObserver(entries => { const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (visible) setActive(visible.target.id); }, { rootMargin: '-110px 0px -62% 0px' }); nodes.forEach(node => observer.observe(node)); return () => observer.disconnect(); }, [headings]);
  return <aside className="article-sidebar" aria-label={`${kind} companion`}><div className="sidebar-scroll"><p className="eyebrow">Inside this {kind}</p><nav className="toc" aria-label="On this page">{headings.map(item => <a key={item.id} className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined} href={`#${item.id}`}>{item.label}</a>)}</nav><div className="sidebar-support"><h3>Keep the next action visible.</h3><p>Use the source, owner boundary, review point, and exception path to turn guidance into a controlled workflow.</p><Link href={relatedHref}>Explore the related service</Link>{sources.length > 0 && <><h3>Source context</h3><ul>{sources.slice(0,3).map(source => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ul></>}</div></div></aside>;
}
