import Link from 'next/link';
import type { ReactNode } from 'react';

type BlogCardProps = {
  href: string;
  title: string;
  description: string;
  headingLevel: 'h2' | 'h3';
  media?: ReactNode;
  category?: string;
  meta?: ReactNode;
  linkLabel?: ReactNode;
};

export function BlogCard({
  href,
  title,
  description,
  headingLevel,
  media,
  category,
  meta,
  linkLabel,
}: BlogCardProps) {
  const Heading = headingLevel;

  return (
    <Link className="article-card" href={href}>
      {media}
      {category ? <span className="pill">{category}</span> : null}
      <Heading className="article-card-title">{title}</Heading>
      <p className="article-card-excerpt">{description}</p>
      {meta ? <p className="meta">{meta}</p> : null}
      {linkLabel ? <span className="text-link">{linkLabel}</span> : null}
    </Link>
  );
}
