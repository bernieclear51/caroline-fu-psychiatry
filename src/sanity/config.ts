import { createClient } from '@sanity/client'

// Sanity project details from environment variables
export const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || '9ko39o08'
export const dataset = process.env.REACT_APP_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  withCredentials: false, // This is important for CORS
})

// For authenticated requests (when editing content)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  withCredentials: false, // This is important for CORS
  token: process.env.REACT_APP_SANITY_TOKEN, // Only needed for write operations
})
