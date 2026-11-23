import type { CSSProperties } from 'react';

type ServiceWorkflowPhotoProps = {
  slug: string;
  variant: 'home' | 'hero';
};

const photos: Record<string, { homeAlt: string; heroAlt: string; homePosition: string; heroPosition: string }> = {
  'prospect-research': {
    homeAlt: 'Person working beside a laptop displaying charts',
    heroAlt: 'Professional reviewing account research on a tablet in an office',
    homePosition: '50% 50%',
    heroPosition: '42% 50%',
  },
  'list-building-enrichment': {
    homeAlt: 'Open laptop and handwritten notebook on a desk',
    heroAlt: 'Professionals checking printed contact data beside a laptop',
    homePosition: '50% 50%',
    heroPosition: '50% 56%',
  },
  'outreach-operations': {
    homeAlt: 'People working together around laptops',
    heroAlt: 'Professionals coordinating outreach work across laptops and a tablet',
    homePosition: '50% 50%',
    heroPosition: '56% 52%',
  },
  'crm-hygiene': {
    homeAlt: 'Person using a laptop beside a notebook and phone',
    heroAlt: 'Professionals reviewing shared records at an office workstation',
    homePosition: '50% 50%',
    heroPosition: '53% 50%',
  },
  'meeting-coordination': {
    homeAlt: 'Small group in an office discussion around a shared table',
    heroAlt: 'Professionals coordinating a working meeting around a shared table',
    homePosition: '50% 50%',
    heroPosition: '51% 50%',
  },
  'sequence-quality-review': {
    homeAlt: 'People reviewing a workflow on a wall board',
    heroAlt: 'Professionals reviewing a printed quality sample together',
    homePosition: '50% 50%',
    heroPosition: '50% 58%',
  },
};

export function ServiceWorkflowPhoto({ slug, variant }: ServiceWorkflowPhotoProps) {
  const photo = photos[slug];
  if (!photo) throw new Error(`Missing workflow photograph for ${slug}`);
  const isHome = variant === 'home';
  const directory = isHome ? 'home-services' : 'services-cards';
  const widths = isHome ? [640, 960, 1280] : [640, 960, 1280];
  const sizes = isHome ? '(max-width: 600px) 90vw, (max-width: 900px) 50vw, (max-width: 1600px) 33vw, 480px' : '(max-width: 900px) 90vw, (max-width: 1600px) 55vw, 760px';
  const sourceSet = (format: 'avif' | 'webp') => widths.map(width => `/images/${directory}/${slug}-${width}.${format} ${width}w`).join(', ');
  const style = { '--workflow-photo-position': isHome ? photo.homePosition : photo.heroPosition } as CSSProperties;

  return <figure className={isHome ? 'home-service-photo' : 'service-detail-photo'} style={style}>
    <picture>
      <source type="image/avif" srcSet={sourceSet('avif')} sizes={sizes}/>
      <source type="image/webp" srcSet={sourceSet('webp')} sizes={sizes}/>
      <img
        src={`/images/${directory}/${slug}-960.webp`}
        srcSet={sourceSet('webp')}
        sizes={sizes}
        alt={isHome ? photo.homeAlt : photo.heroAlt}
        width={1280}
        height={800}
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={variant === 'hero' ? 'high' : 'auto'}
      />
    </picture>
  </figure>;
}
