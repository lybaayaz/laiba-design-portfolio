import { useEffect } from 'react';

type SeoProps = { title: string; description: string; path?: string; image?: string };

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let node = document.head.querySelector<HTMLMetaElement>(selector);
  if (!node) { node = document.createElement('meta'); document.head.appendChild(node); }
  Object.entries(attrs).forEach(([key, value]) => node!.setAttribute(key, value));
}

export default function Seo({ title, description, path = '/', image = '/favicon.png' }: SeoProps) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://laibaayyaz.com').replace(/\/$/, '');
  const absoluteUrl = path.startsWith('http') ? path : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`;
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: absoluteImage });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: absoluteUrl });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  }, [title, description, absoluteUrl, absoluteImage]);
  return null;
}