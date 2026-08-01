import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ftdynamics.pk';
  const routes = ['', '/privacy', '/terms'];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date('2024-07-01'),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.5,
  }));
}
