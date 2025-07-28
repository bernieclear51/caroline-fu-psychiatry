// Main exports for Sanity CMS integration
export { client, writeClient, projectId, dataset, apiVersion } from './config'
export { queries, sanityFetch, getImageUrl } from './queries'
export * from './types'

// Re-export hooks for convenience
export {
  usePages,
  usePage,
  useServices,
  useService,
  usePracticeInfo,
  useStaff,
  useSEOSettings,
  useAnnouncements,
  useServicesByCategory,
  useActiveStaff,
  useHomepageAnnouncements,
  usePracticeContact,
  usePageByLanguage,
  useServicesByLanguage
} from '../hooks/useSanity'
