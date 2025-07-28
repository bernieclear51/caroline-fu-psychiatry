// TypeScript types for Sanity content

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface Slug {
  _type: 'slug'
  current: string
}

export interface Page {
  _id: string
  _type: 'page'
  title: string
  slug: Slug
  description?: string
  content?: any[] // Rich text content
  seo?: SEOSettings
  language?: 'en' | 'zh'
  publishedAt?: string
}

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: Slug
  shortDescription: string
  fullDescription?: any[] // Rich text content
  category: 'adult-psychiatry' | 'child-psychiatry' | 'adult-therapy' | 'child-therapy' | 'specialized'
  features?: string[]
  image?: SanityImage
  order?: number
  isActive: boolean
  seo?: SEOSettings
  language?: 'en' | 'zh'
}

export interface PracticeInfo {
  _id: string
  _type: 'practiceInfo'
  practiceName: string
  tagline?: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  contact: {
    phone: string
    email: string
    fax?: string
  }
  hours: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  insurance: string[]
  languages: string[]
  emergencyInfo?: string
  parkingInfo?: string
}

export interface Staff {
  _id: string
  _type: 'staff'
  name: string
  title: string
  credentials: string[]
  bio?: any[] // Rich text content
  specialties: string[]
  languages: string[]
  image?: SanityImage
  order?: number
  isActive: boolean
  education?: {
    degree: string
    institution: string
    year?: number
  }[]
  certifications?: string[]
}

export interface SEOSettings {
  _id: string
  _type: 'seoSettings'
  pageSlug: string
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: SanityImage
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: SanityImage
  canonicalUrl?: string
  noIndex?: boolean
  structuredData?: any
}

export interface Announcement {
  _id: string
  _type: 'announcement'
  title: string
  content: any[] // Rich text content
  type: 'general' | 'urgent' | 'update' | 'holiday'
  published: boolean
  publishedAt: string
  expiresAt?: string
  showOnHomepage: boolean
  language?: 'en' | 'zh'
}

// Form data types for content creation/editing
export interface ServiceFormData {
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  category: Service['category']
  features: string[]
  isActive: boolean
  order?: number
  language?: 'en' | 'zh'
}

export interface PageFormData {
  title: string
  slug: string
  description?: string
  content: string
  language?: 'en' | 'zh'
}

export interface StaffFormData {
  name: string
  title: string
  credentials: string[]
  bio: string
  specialties: string[]
  languages: string[]
  isActive: boolean
  order?: number
}

export interface PracticeInfoFormData {
  practiceName: string
  tagline?: string
  address: PracticeInfo['address']
  contact: PracticeInfo['contact']
  hours: PracticeInfo['hours']
  insurance: string[]
  languages: string[]
  emergencyInfo?: string
  parkingInfo?: string
}

// API response types
export interface SanityResponse<T> {
  data: T
  error?: string
}

export interface SanityListResponse<T> {
  data: T[]
  total: number
  error?: string
}
