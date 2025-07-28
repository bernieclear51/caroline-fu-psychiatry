import { useState, useEffect } from 'react'
import { sanityFetch } from '../sanity/queries'
import type { Page, Service, PracticeInfo, Staff, SEOSettings, Announcement } from '../sanity/types'

// Generic hook for Sanity data fetching
function useSanityData<T>(fetchFunction: () => Promise<T>, dependencies: any[] = []) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchFunction()
        if (isMounted) {
          setData(result)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred')
          console.error('Sanity fetch error:', err)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, dependencies)

  return { data, loading, error, refetch: () => setLoading(true) }
}

// Specific hooks for medical practice content

export function usePages() {
  return useSanityData<Page[]>(sanityFetch.getAllPages)
}

export function usePage(slug: string) {
  return useSanityData<Page>(
    () => sanityFetch.getPageBySlug(slug),
    [slug]
  )
}

export function useServices() {
  return useSanityData<Service[]>(sanityFetch.getAllServices)
}

export function useService(slug: string) {
  return useSanityData<Service>(
    () => sanityFetch.getServiceBySlug(slug),
    [slug]
  )
}

export function usePracticeInfo() {
  return useSanityData<PracticeInfo>(sanityFetch.getPracticeInfo)
}

export function useStaff() {
  return useSanityData<Staff[]>(sanityFetch.getStaffProfiles)
}

export function useSEOSettings(pageSlug: string) {
  return useSanityData<SEOSettings>(
    () => sanityFetch.getSEOSettings(pageSlug),
    [pageSlug]
  )
}

export function useAnnouncements() {
  return useSanityData<Announcement[]>(sanityFetch.getAnnouncements)
}

// Hook for filtered services by category
export function useServicesByCategory(category: Service['category']) {
  const { data: allServices, loading, error } = useServices()
  
  const filteredServices = allServices?.filter(service => 
    service.category === category && service.isActive
  ) || []

  return { data: filteredServices, loading, error }
}

// Hook for active staff members
export function useActiveStaff() {
  const { data: allStaff, loading, error } = useStaff()
  
  const activeStaff = allStaff?.filter(staff => staff.isActive) || []

  return { data: activeStaff, loading, error }
}

// Hook for homepage announcements
export function useHomepageAnnouncements() {
  const { data: allAnnouncements, loading, error } = useAnnouncements()
  
  const homepageAnnouncements = allAnnouncements?.filter(announcement => 
    announcement.showOnHomepage && announcement.published
  ) || []

  return { data: homepageAnnouncements, loading, error }
}

// Hook for practice contact information
export function usePracticeContact() {
  const { data: practiceInfo, loading, error } = usePracticeInfo()
  
  return {
    data: practiceInfo?.contact || null,
    address: practiceInfo?.address || null,
    hours: practiceInfo?.hours || null,
    loading,
    error
  }
}

// Hook for multilingual content
export function usePageByLanguage(slug: string, language: 'en' | 'zh' = 'en') {
  return useSanityData<Page>(
    () => sanityFetch.getPageBySlug(`${slug}-${language}`),
    [slug, language]
  )
}

export function useServicesByLanguage(language: 'en' | 'zh' = 'en') {
  const { data: allServices, loading, error } = useServices()
  
  const filteredServices = allServices?.filter(service => 
    (service.language === language || !service.language) && service.isActive
  ) || []

  return { data: filteredServices, loading, error }
}
