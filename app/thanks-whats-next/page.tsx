import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'What happens next', robots: { index: false, follow: false }, alternates: { canonical: '/thanks-whats-next' } };
export default function NextPage() { return <main><section className="not-found"><div><p className="eyebrow">Consultation next steps</p><h1>Prepare one real prospecting workflow.</h1><p>If OnceHub confirmed your booking, bring a recurring queue that needs a clearer source, owner, output, or review point. Direct access to this page does not independently confirm a booking.</p><Link className="button primary" href="/services">Review specialist roles</Link></div></section></main>; }
