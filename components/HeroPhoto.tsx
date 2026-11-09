type HeroPhotoProps = {
  role: 'blog' | 'services' | 'research';
  alt: string;
};

const heroAssets = {
  blog: {
    stem: 'blog-workflow-planning',
    width: 2400,
    height: 1600,
  },
  services: {
    stem: 'services-sales-workflow',
    width: 2400,
    height: 1600,
  },
  research: {
    stem: 'research-reporting-analysis',
    width: 2400,
    height: 1600,
  },
} as const;

export function HeroPhoto({ role, alt }: HeroPhotoProps) {
  const asset = heroAssets[role];
  const srcSet = (format: 'avif' | 'webp') =>
    [960, 1600, 2400]
      .map(width => `/images/heroes/${asset.stem}-${width}.${format} ${width}w`)
      .join(', ');

  return (
    <picture className={`hero-photo hero-photo-${role}`}>
      <source type="image/avif" srcSet={srcSet('avif')} sizes="(max-width: 900px) 90vw, (max-width: 1600px) 55vw, 760px" />
      <source type="image/webp" srcSet={srcSet('webp')} sizes="(max-width: 900px) 90vw, (max-width: 1600px) 55vw, 760px" />
      <img
        src={`/images/heroes/${asset.stem}-1600.webp`}
        srcSet={srcSet('webp')}
        sizes="(max-width: 900px) 90vw, (max-width: 1600px) 55vw, 760px"
        width={asset.width}
        height={asset.height}
        alt={alt}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}
