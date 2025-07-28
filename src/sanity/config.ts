import { createClient } from '@sanity/client'

// Replace these with your actual Sanity project details
// You can find these in your Sanity dashboard
export const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || 'your-project-id'
export const dataset = process.env.REACT_APP_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// For authenticated requests (when editing content)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN, // Only needed for write operations
})
