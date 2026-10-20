'use client';
import { useEffect, useRef } from 'react';
import provenance from '@/app/review-provenance.json';

export function TestimonialsRail() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const shell = viewport.current; const row = track.current;
    if (!shell || !row || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0; let last = performance.now(); let paused = false;
    const setPaused = (value: boolean) => { paused = value; };
    const tick = (now: number) => { if (!paused) { shell.scrollLeft += (now - last) * .032; if (shell.scrollLeft >= row.scrollWidth / 2) shell.scrollLeft -= row.scrollWidth / 2; } last = now; frame = requestAnimationFrame(tick); };
    const enter = () => setPaused(true); const leave = () => setPaused(false);
    shell.addEventListener('mouseenter', enter); shell.addEventListener('mouseleave', leave); shell.addEventListener('focusin', enter); shell.addEventListener('focusout', leave);
    frame = requestAnimationFrame(tick); return () => { cancelAnimationFrame(frame); shell.removeEventListener('mouseenter', enter); shell.removeEventListener('mouseleave', leave); shell.removeEventListener('focusin', enter); shell.removeEventListener('focusout', leave); };
  }, []);
  const cards = [...provenance.records, ...provenance.records];
  return <section className="testimonials" aria-labelledby="reviews-title"><div className="reviews-heading"><div><p className="eyebrow">First-party client perspective</p><h2 id="reviews-title">StealthAgents reviews</h2></div><a href={provenance.source} target="_blank" rel="noopener noreferrer">View official source</a></div><div ref={viewport} className="testimonials-viewport" tabIndex={0} aria-label="Ten verified StealthAgents reviews. Focus pauses automatic movement."><div ref={track} className="testimonials-track">{cards.map((review, index) => <article className="testimonial-card" key={`${review.name}-${index}`} aria-hidden={index >= provenance.records.length}><div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div><h3>{review.headline}</h3><blockquote>{review.body}</blockquote><p><strong>{review.name}</strong><span>{review.detail}</span></p></article>)}</div></div></section>;
}
