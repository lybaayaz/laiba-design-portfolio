import type { ImgHTMLAttributes } from 'react';

const imageModules = import.meta.glob('../assets/images/**/*.{webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function imageUrl(path: string) {
  return imageModules[`../assets/images/${path}`];
}

export default function Picture({ src, alt, loading = 'lazy', ...props }: ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const avif = src.replace(/\.webp$/i, '.avif');
  const avifUrl = imageUrl(avif);
  return (
    <picture>
      {avifUrl ? <source srcSet={avifUrl} type="image/avif" /> : null}
      <img src={imageUrl(src)} alt={alt} loading={loading} decoding="async" {...props} />
    </picture>
  );
}
