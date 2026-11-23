import type { ReactNode } from 'react';

export type ServiceIconName = 'research' | 'list' | 'outreach' | 'crm' | 'calendar' | 'quality' | 'scope' | 'outputs' | 'inputs' | 'boundary' | 'checks' | 'questions' | 'examples' | 'related';

export const serviceIconNames: Record<string, ServiceIconName> = {
  'prospect-research': 'research',
  'list-building-enrichment': 'list',
  'outreach-operations': 'outreach',
  'crm-hygiene': 'crm',
  'meeting-coordination': 'calendar',
  'sequence-quality-review': 'quality',
};

const iconPaths: Record<ServiceIconName, ReactNode> = {
  research: <><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5M8 10.5h5M10.5 8v5"/></>,
  list: <><path d="M9 6h11M9 12h11M9 18h11"/><path d="m4 6 .8.8L6.5 5M4 12l.8.8L6.5 11M4 18l.8.8 1.7-1.8"/></>,
  outreach: <><path d="M4 13v-2l14-6v14L4 13Z"/><path d="M8 14v5h4v-4M18 9a3 3 0 0 1 0 6"/></>,
  crm: <><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3v3H8z"/></>,
  quality: <><path d="m12 3 7 3v5c0 4.7-2.7 8.1-7 10-4.3-1.9-7-5.3-7-10V6l7-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  scope: <><path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3"/><circle cx="12" cy="12" r="3"/></>,
  outputs: <><path d="M5 4h10l4 4v12H5zM15 4v4h4M8 12h8M8 16h6"/></>,
  inputs: <><path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 20h14"/></>,
  boundary: <><path d="M12 3v18M5 6h14M7 6l-3 6h6L7 6Zm10 0-3 6h6l-3-6Z"/><path d="M8 21h8"/></>,
  checks: <><path d="M9 5h10M9 12h10M9 19h10"/><path d="m3.5 5 1.5 1.5L7.5 4M3.5 12l1.5 1.5L7.5 11M3.5 19l1.5 1.5L7.5 18"/></>,
  questions: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1.2 1-1.2 1.8M12 17h.01"/></>,
  examples: <><path d="M4 5h16v12H8l-4 4V5Z"/><path d="M8 9h8M8 13h5"/></>,
  related: <><path d="M9.5 14.5 14.5 9M7 17l-1 1a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M17 7l1-1a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"/></>,
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return <span className="service-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name]}
    </svg>
  </span>;
}
