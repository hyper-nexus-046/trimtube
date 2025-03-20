import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_HOST_URL!

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1
    }
  ]
}
