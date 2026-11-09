import type { CSSProperties } from 'react';

type Workflow = { intake: string; process: string; output: string };
type ServiceCardPhotoProps = { slug: string; title: string; visual: Workflow };

const photos: Record<string, { alt: string; position: string }> = {
  'prospect-research': { alt: 'Professional reviewing account research on a tablet in an office', position: '42% 50%' },
  'list-building-enrichment': { alt: 'Professionals checking printed contact data beside a laptop', position: '50% 56%' },
  'outreach-operations': { alt: 'Professionals coordinating outreach work across laptops and a tablet', position: '56% 52%' },
  'crm-hygiene': { alt: 'Professionals reviewing shared records at an office workstation', position: '53% 50%' },
  'meeting-coordination': { alt: 'Professionals coordinating a working meeting around a shared table', position: '51% 50%' },
  'sequence-quality-review': { alt: 'Professionals reviewing a printed quality sample together', position: '50% 58%' }
};

export function ServiceCardPhoto({ slug, title, visual }: ServiceCardPhotoProps) {
  const photo = photos[slug];
  if (!photo) throw new Error(`Missing service card photograph for ${slug}`);
  const sourceSet = (format: 'avif' | 'webp') => [640, 960, 1280].map(width => `/images/services-cards/${slug}-${width}.${format} ${width}w`).join(', ');
  return <>
    <figure className={`service-card-photo service-card-photo-${slug}`} style={{ '--service-photo-position': photo.position } as CSSProperties}>
      <picture>
        <source type="image/avif" srcSet={sourceSet('avif')} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"/>
        <source type="image/webp" srcSet={sourceSet('webp')} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"/>
        <img src={`/images/services-cards/${slug}-960.webp`} alt={photo.alt} width="1280" height="800" loading="lazy" decoding="async"/>
      </picture>
    </figure>
    <span className="service-card-workflow">{title} workflow. Input: {visual.intake}. Control: {visual.process}. Output: {visual.output}.</span>
  </>;
}
