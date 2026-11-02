const widths = [960, 1600, 2400] as const;
const sourceSet = (format: 'avif' | 'webp') => widths
  .map(width => `/images/field-manual/qualified-lead-handoff-${width}.${format} ${width}w`)
  .join(', ');

export function FieldManualPhoto() {
  return <figure className="field-manual-photo">
    <picture>
      <source type="image/avif" srcSet={sourceSet('avif')} sizes="(max-width: 900px) 90vw, 50vw" />
      <source type="image/webp" srcSet={sourceSet('webp')} sizes="(max-width: 900px) 90vw, 50vw" />
      <img
        src="/images/field-manual/qualified-lead-handoff-2400.webp"
        alt="Sales colleagues reviewing prospect notes and coordinating a qualified lead handoff"
        width="2400"
        height="1600"
        loading="lazy"
        decoding="async"
      />
    </picture>
  </figure>;
}
