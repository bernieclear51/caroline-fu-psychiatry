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
  getSEOSettings: (pageSlug: string) => `*[_type == "seoSettings" && pageSlug == "${pageSlug}"][0]`,
  
  // Get all announcements
  getAnnouncements: `*[_type == "announcement" && published == true] | order(publishedAt desc)`,
}

// Fetch functions
export const sanityFetch = {
  // Pages
  async getAllPages() {
    return await client.fetch(queries.getAllPages)
  },
  
  async getPageBySlug(slug: string) {
    return await client.fetch(queries.getPageBySlug(slug))
  },
  
  // Services
  async getAllServices() {
    return await client.fetch(queries.getAllServices)
  },
  
  async getServiceBySlug(slug: string) {
    return await client.fetch(queries.getServiceBySlug(slug))
  },
  
  // Practice Info
  async getPracticeInfo() {
    return await client.fetch(queries.getPracticeInfo)
  },
  
  // Staff
  async getStaffProfiles() {
    return await client.fetch(queries.getStaffProfiles)
  },
  
  // SEO
  async getSEOSettings(pageSlug: string) {
    return await client.fetch(queries.getSEOSettings(pageSlug))
  },
  
  // Announcements
  async getAnnouncements() {
    return await client.fetch(queries.getAnnouncements)
  },
}

// Helper function to get image URL from Sanity
export function getImageUrl(source: any) {
  if (!source?.asset?._ref) return null
  
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split('-')
  const [width, height] = dimensions.split('x')
  
  return `https://cdn.sanity.io/images/${process.env.REACT_APP_SANITY_PROJECT_ID || 'your-project-id'}/${process.env.REACT_APP_SANITY_DATASET || 'production'}/${id}-${dimensions}.${format}`
}
