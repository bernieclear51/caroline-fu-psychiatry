# Sanity CMS Integration for Dr. Caroline Fu Psychiatry Website

This directory contains the Sanity CMS integration for managing content on the medical practice website.

## 🏥 Overview

Sanity provides a professional content management system specifically configured for medical practice needs, allowing easy management of:

- **Services** (Adult Psychiatry, Child Therapy, ADHD, Autism, etc.)
- **Practice Information** (Hours, location, insurance, contact details)
- **Staff Profiles** (Dr. Caroline Fu bio, credentials, photos)
- **Page Content** (Home, About, Services, Contact pages)
- **SEO Settings** (Meta tags, descriptions, structured data)
- **Announcements** (Practice updates, holiday hours, news)

## 📁 File Structure

```
src/sanity/
├── config.ts          # Sanity client configuration
├── queries.ts         # GROQ queries for fetching content
├── types.ts           # TypeScript types for content
└── README.md          # This documentation
```

## 🔧 Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in your Sanity project details:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_TOKEN=your-token-here
```

### 2. Get Sanity Project Details

1. Go to [Sanity Dashboard](https://sanity.io/manage)
2. Find your project ID in the project settings
3. Create an API token with read permissions
4. For write operations, create a token with write permissions

### 3. Content Types (Schemas)

The following content types are configured for your medical practice:

#### **Services**
- Title, description, category
- Features list
- Images
- SEO settings
- Active/inactive status

#### **Practice Information**
- Practice name and tagline
- Address and contact details
- Office hours
- Insurance accepted
- Languages spoken

#### **Staff Profiles**
- Name, title, credentials
- Bio and specialties
- Professional photo
- Education and certifications

#### **Pages**
- Page title and content
- SEO meta tags
- Multilingual support (English/Chinese)

#### **SEO Settings**
- Page-specific meta tags
- Open Graph settings
- Twitter Card settings
- Structured data

## 🎯 Usage Examples

### Fetching Services

```tsx
import { useServices } from '../hooks/useSanity'

function ServicesPage() {
  const { data: services, loading, error } = useServices()

  if (loading) return <div>Loading services...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {services?.map(service => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <p>{service.shortDescription}</p>
        </div>
      ))}
    </div>
  )
}
```

### Fetching Practice Information

```tsx
import { usePracticeInfo } from '../hooks/useSanity'

function ContactPage() {
  const { data: practice, loading } = usePracticeInfo()

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>{practice?.practiceName}</h1>
      <p>{practice?.contact.phone}</p>
      <p>{practice?.contact.email}</p>
    </div>
  )
}
```

### Fetching Staff Profiles

```tsx
import { useActiveStaff } from '../hooks/useSanity'

function AboutPage() {
  const { data: staff, loading } = useActiveStaff()

  return (
    <div>
      {staff?.map(member => (
        <div key={member._id}>
          <h3>{member.name}</h3>
          <p>{member.title}</p>
          <p>{member.credentials.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}
```

## 🔍 Available Hooks

### Content Hooks
- `usePages()` - All pages
- `usePage(slug)` - Specific page by slug
- `useServices()` - All services
- `useService(slug)` - Specific service by slug
- `usePracticeInfo()` - Practice information
- `useStaff()` - All staff profiles
- `useAnnouncements()` - All announcements

### Filtered Hooks
- `useServicesByCategory(category)` - Services by category
- `useActiveStaff()` - Only active staff members
- `useHomepageAnnouncements()` - Announcements for homepage
- `usePracticeContact()` - Contact information only

### Multilingual Hooks
- `usePageByLanguage(slug, language)` - Page in specific language
- `useServicesByLanguage(language)` - Services in specific language

## 🌐 Multilingual Support

Content can be created in both English and Chinese:

```tsx
// English content
const { data: englishPage } = usePage('about')

// Chinese content
const { data: chinesePage } = usePage('about-zh')
```

## 🔒 Security

- **Read operations** use public API (no token required)
- **Write operations** require authentication token
- **Environment variables** keep credentials secure
- **HIPAA compliance** - no patient data stored

## 📊 SEO Integration

Sanity content automatically integrates with your SEO system:

```tsx
import { useSEOSettings } from '../hooks/useSanity'

function PageWithSEO({ pageSlug }: { pageSlug: string }) {
  const { data: seoSettings } = useSEOSettings(pageSlug)
  
  // SEO settings are automatically applied to page head
  return <div>Page content...</div>
}
```

## 🚀 Deployment

When deploying to Vercel:

1. Add environment variables to Vercel dashboard
2. Sanity content is fetched at build time and runtime
3. Changes in Sanity appear immediately on your website
4. No additional deployment needed for content updates

## 📝 Content Management Workflow

1. **Edit content** in Sanity Studio (web interface)
2. **Preview changes** before publishing
3. **Publish content** - appears immediately on website
4. **Version control** - all changes are tracked
5. **Rollback** if needed to previous versions

## 🛠️ Troubleshooting

### Common Issues

**"Project not found" error:**
- Check `REACT_APP_SANITY_PROJECT_ID` in environment variables
- Verify project ID in Sanity dashboard

**"Unauthorized" error:**
- Check `REACT_APP_SANITY_TOKEN` for write operations
- Ensure token has correct permissions

**Content not loading:**
- Check network connection
- Verify dataset name (`production` vs `development`)
- Check browser console for errors

### Development Tips

- Use browser dev tools to inspect Sanity queries
- Check network tab for API calls
- Enable Sanity's built-in query debugging
- Test queries in Sanity's Vision tool

## 📞 Support

For Sanity-specific issues:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)
- [Sanity Support](https://www.sanity.io/support)

For medical practice website issues:
- Check this README
- Review TypeScript types in `types.ts`
- Examine query examples in `queries.ts`
