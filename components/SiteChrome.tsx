'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';
import { ArrowIcon } from './Icons';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 10); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); toggleRef.current?.focus(); } }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
  return <><a className="skip-link" href="#main-content">Skip to main content</a><header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
    <Link className="brand" href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}><Image src="/logo.svg" alt="" width={40} height={40} priority /><span>{site.name}</span></Link>
    <button ref={toggleRef} className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}><span>Menu</span><b aria-hidden="true">{open ? '×' : '+'}</b></button>
    <nav id="primary-navigation" className={open ? 'is-open' : ''} aria-label="Primary navigation">{nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
    <div className="powered powered-header"><Image src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width={94} height={23} /><span>Powered by StealthAgents</span></div>
    <Link className="button compact header-cta" href="/contact-us">Start a brief <ArrowIcon /></Link>
  </header></>;
}

export function Footer() { return <footer className="site-footer"><div className="footer-inner"><div className="footer-top"><div className="footer-brand"><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Specialist remote support for disciplined sales development operations.</p></div><nav className="footer-group footer-services" aria-labelledby="footer-services-title"><h2 id="footer-services-title">Services</h2><div className="footer-links">{site.services.map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div></nav><nav className="footer-group footer-explore" aria-labelledby="footer-explore-title"><h2 id="footer-explore-title">Explore</h2><div className="footer-links"><Link href="/">Home</Link><Link href="/services">All services</Link><Link href="/contact-us">Contact Us</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></nav></div><div className="footer-parent"><a className="footer-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company"><Image src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width={149} height={50} /><span><small>Parent company</small><strong>Powered by StealthAgents</strong></span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.domain}</span></div></div></footer>; }
