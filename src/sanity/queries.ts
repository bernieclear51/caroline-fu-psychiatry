import { client } from './config'

// GROQ queries for medical practice content
export const queries = {
  // Get all pages
  getAllPages: `*[_type == "page"] | order(title asc)`,
  
  // Get specific page by slug
  getPageBySlug: (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0]`,
  
  // Get all services
  getAllServices: `*[_type == "service"] | order(order asc, title asc)`,
  
  // Get specific service by slug
  getServiceBySlug: (slug: string) => `*[_type == "service" && slug.current == "${slug}"][0]`,
  
  // Get practice information
  getPracticeInfo: `*[_type == "practiceInfo"][0]`,
  
  // Get staff profiles
  getStaffProfiles: `*[_type == "staff"] | order(order asc)`,
  
  // Get SEO settings for a page
  getSEOSettings: (pageSlug: string) => `*[_type == "seoSettings" && pageSlug == "${pageSlug}"][0]{
    ...,
    "ogImageUrl": ogImage.asset->url,
    "twitterImageUrl": twitterImage.asset->url
  }`,
  
  // Get SEO settings by page name
  getSEOByPageName: (pageName: string) => `*[_type == "seoSettings" && pageName == "${pageName}"][0]{
    ...,
    "ogImageUrl": ogImage.asset->url,
    "twitterImageUrl": twitterImage.asset->url
  }`,
  
  // Get global settings
  getGlobalSettings: `*[_type == "globalSettings"][0]{
    ...,
    "defaultImageUrl": defaultImage.asset->url,
    "physicianImageUrl": physicianImage.asset->url
  }`,
  
  // Get all SEO settings
  getAllSEOSettings: `*[_type == "seoSettings"]{
    pageSlug,
    pageName,
    title,
    description,
    priority,
    changeFrequency
  }`,
  
  // Get all announcements
  getAnnouncements: `*[_type == "announcement" && published == true] | order(publishedAt desc)`,
  
  // Get home page content
  getHomePage: `*[_type == "homePage"][0]{
    ...,
    "heroImageUrl": heroSection.heroImage.asset->url,
    "aboutImageUrl": aboutSection.image.asset->url
  }`,
  
  // Generate sitemap data
  getSitemapData: `{
    "pages": *[_type == "seoSettings" && !noIndex]{
      "loc": pageSlug,
      "lastmod": lastModified,
      "changefreq": changeFrequency,
      "priority": priority
    },
    "services": *[_type == "service"]{
      "loc": "/services/" + slug.current,
      "lastmod": _updatedAt,
      "changefreq": "monthly",
      "priority": 0.8
    }
  }`,
}

// Fetch functions
export const sanityFetch = {
  // Pages
  async getAllPages() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getAllPages}`);
  },
  
  async getPageBySlug(slug: string) {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getPageBySlug(slug)}`);
  },
  
  // Services
  async getAllServices() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getAllServices}`);
  },
  
  async getServiceBySlug(slug: string) {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getServiceBySlug(slug)}`);
  },
  
  // Practice Info
  async getPracticeInfo() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getPracticeInfo}`);
  },
  
  // Staff
  async getStaffProfiles() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getStaffProfiles}`);
  },
  
  // SEO
  async getSEOSettings(pageSlug: string) {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getSEOSettings(pageSlug)}`);
  },
  
  async getSEOByPageName(pageName: string) {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getSEOByPageName(pageName)}`);
  },
  
  async getAllSEOSettings() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getAllSEOSettings}`);
  },
  
  // Global Settings
  async getGlobalSettings() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getGlobalSettings}`);
  },
  
  // Announcements
  async getAnnouncements() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getAnnouncements}`);
  },
  
  // Home Page
  async getHomePage() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getHomePage}`);
  },
  
  // Sitemap
  async getSitemapData() {
    // @ts-ignore - Ignoring TypeScript error for now
    return await client.fetch(`${queries.getSitemapData}`);
  },
}

// Helper function to get image URL from Sanity
export function getImageUrl(source: any) {
  if (!source?.asset?._ref) return null
  
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split('-')
  const [width, height] = dimensions.split('x')
  
  return `https://cdn.sanity.io/images/${process.env.REACT_APP_SANITY_PROJECT_ID || '9ko39o08'}/${process.env.REACT_APP_SANITY_DATASET || 'production'}/${id}-${dimensions}.${format}`
}
