import type { CSSProperties } from 'react';

type ServiceWorkflowPhotoProps = {
  slug: string;
  variant: 'home' | 'hero';
};

const photos: Record<string, { homeAlt: string; heroAlt: string; homePosition: string; heroPosition: string }> = {
  'prospect-research': {
    homeAlt: 'Person working beside a laptop displaying charts',
    heroAlt: 'People reviewing printed charts around a laptop',
    homePosition: '50% 50%',
    heroPosition: '50% 50%',
  },
  'list-building-enrichment': {
    homeAlt: 'Open laptop and handwritten notebook on a desk',
    heroAlt: 'Hands checking printed records beside a laptop',
    homePosition: '50% 50%',
    heroPosition: '50% 50%',
  },
  'outreach-operations': {
    homeAlt: 'People working together around laptops',
    heroAlt: 'Person using a laptop and phone',
    homePosition: '50% 50%',
    heroPosition: '50% 50%',
  },
  'crm-hygiene': {
    homeAlt: 'Person using a laptop beside a notebook and phone',
    heroAlt: 'Person reviewing charts on a laptop',
    homePosition: '50% 50%',
    heroPosition: '50% 50%',
  },
  'meeting-coordination': {
    homeAlt: 'Small group in an office discussion around a shared table',
    heroAlt: 'Open planner and pen arranged beside a laptop',
    homePosition: '50% 50%',
    heroPosition: '50% 50%',
  },
  'sequence-quality-review': {
    homeAlt: 'People reviewing a workflow on a wall board',
    heroAlt: 'People inspecting rows of colored sticky notes',
    homePosition: '50% 50%',
    heroPosition: '50% 50%',
  },
};

export function ServiceWorkflowPhoto({ slug, variant }: ServiceWorkflowPhotoProps) {
  const photo = photos[slug];
  if (!photo) throw new Error(`Missing workflow photograph for ${slug}`);
  const isHome = variant === 'home';
  const directory = isHome ? 'home-services' : 'service-heroes';
  const widths = isHome ? [640, 960, 1280] : [960, 1600, 2400];
  const sizes = isHome ? '(max-width: 600px) 90vw, (max-width: 900px) 50vw, (max-width: 1600px) 33vw, 480px' : '(max-width: 900px) 90vw, (max-width: 1600px) 55vw, 760px';
  const sourceSet = (format: 'avif' | 'webp') => widths.map(width => `/images/${directory}/${slug}-${width}.${format} ${width}w`).join(', ');
  const style = { '--workflow-photo-position': isHome ? photo.homePosition : photo.heroPosition } as CSSProperties;

  return <figure className={isHome ? 'home-service-photo' : 'service-detail-photo'} style={style}>
    <picture>
      <source type="image/avif" srcSet={sourceSet('avif')} sizes={sizes}/>
      <source type="image/webp" srcSet={sourceSet('webp')} sizes={sizes}/>
      <img
        src={`/images/${directory}/${slug}-${isHome ? 960 : 1600}.webp`}
        srcSet={sourceSet('webp')}
        sizes={sizes}
        alt={isHome ? photo.homeAlt : photo.heroAlt}
        width={isHome ? 1280 : 2400}
        height={isHome ? 800 : 1600}
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={variant === 'hero' ? 'high' : 'auto'}
      />
    </picture>
  </figure>;
}
