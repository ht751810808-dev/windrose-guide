import { MetadataRoute } from 'next';

const baseUrl = 'https://www.windroseguide.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: baseUrl,                              lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    // P1 — Core game content
    { url: `${baseUrl}/windrose-wiki`,           lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/windrose-builds`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/windrose-weapons`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/windrose-ships`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/windrose-crew`,           lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    // P2 — Gameplay & tools
    { url: `${baseUrl}/windrose-mods`,           lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/windrose-map`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/windrose-gameplay`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/windrose-steam`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    // P3 — Long-tail & community
    { url: `${baseUrl}/windrose-trainer`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/windrose-roadmap`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/windrose-gunpowder`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/windrose-key`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/windrose-zhongwen`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${baseUrl}/windrose-reddit`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
  ];
}
