# Sanity as Master SEO/CMS Tool - Complete Guide

## Overview

Your website is now configured to use Sanity as the central hub for all SEO and content management. This guide explains how to use the new system.

## What We've Built

### 1. Enhanced SEO Schema
The `seoSettings` schema now includes:
- **Basic SEO**: Title, description, keywords, focus keyword
- **Social Media**: Open Graph and Twitter cards with image support
- **Advanced**: Canonical URLs, sitemap settings, redirects, structured data
- **Analytics**: SEO score tracking and last modified dates

### 2. Global Settings Schema
The `globalSettings` schema manages:
- **Site Information**: Site name, URL, default images
- **Default SEO**: Fallback titles, descriptions, keywords
- **Organization Details**: Address, phone, email, hours
- **Physician Information**: Name, credentials, specialties

### 3. Dynamic SEO Hook
The `useSEOFromSanity` hook:
- Fetches SEO data from Sanity in real-time
- Falls back to global defaults when page-specific data isn't available
- Generates structured data automatically
- Provides loading and error states

## Migration Process

### Step 1: Get a Sanity Write Token
1. Go to https://www.sanity.io/manage
2. Select your project (caroline-fu-psychiatry)
3. Navigate to Settings → API
4. Create a new token with write permissions
5. Add to your `.env` file:
   ```
   SANITY_WRITE_TOKEN=your-write-token-here
   ```

### Step 2: Run the Migration Script
```bash
node src/scripts/migrateSEOToSanity.js
```

This will:
- Import all data from `src/data/seo/global.json`
- Import all page SEO from `src/data/seo/pages.json`
- Create documents in Sanity Studio

### Step 3: Verify in Sanity Studio
1. Start Sanity Studio:
   ```bash
   cd caroline-fu-psychiatry
   npm run dev
   ```
2. Visit http://localhost:3333
3. Check that all SEO settings and global settings are imported

## Using Sanity for SEO Management

### Managing Page SEO
1. In Sanity Studio, go to "SEO Settings"
2. Each page has its own SEO document with:
   - **Basic SEO tab**: Title, description, keywords
   - **Social Media tab**: Custom OG/Twitter settings
   - **Advanced tab**: Redirects, canonical URLs, structured data

### Managing Global Settings
1. In Sanity Studio, go to "Global Settings"
2. Configure site-wide defaults:
   - **Site Information**: Update practice details
   - **Default SEO**: Set fallback values
   - **Organization**: Update address, hours, contact info
   - **Physician Info**: Update credentials and specialties

### SEO Best Practices in Sanity

#### Title Optimization
- Keep titles between 50-60 characters
- Include primary keyword near the beginning
- Make each page title unique

#### Description Writing
- Keep descriptions between 150-160 characters
- Include a call-to-action
- Use active voice

#### Keyword Strategy
- Add 5-10 relevant keywords per page
- Set a focus keyword for each page
- Use keywords naturally in content

#### Image Optimization
- Upload images at recommended sizes:
  - Open Graph: 1200x630px
  - Twitter: 1200x600px
- Always add alt text
- Use descriptive filenames

## Implementing in Your React App

### Option 1: Gradual Migration (Recommended)
Keep using the existing `useSEO` hook with a fallback:

```typescript
// In your components
import { useSEO } from '../hooks/useSEO'; // Current JSON-based
import { useSEOFromSanity } from '../hooks/useSEOFromSanity'; // New Sanity-based

const MyPage = () => {
  const seoFromSanity = useSEOFromSanity('home');
  const seoFromJSON = useSEO('home');
  
  // Use Sanity data if available, otherwise fall back to JSON
  const seo = seoFromSanity.loading ? seoFromJSON : seoFromSanity;
  
  return (
    <SEOWrapper seo={seo}>
      {/* Your page content */}
    </SEOWrapper>
  );
};
```

### Option 2: Full Migration
Replace all instances of `useSEO` with `useSEOFromSanity`:

```typescript
// Before
import { useSEO } from '../hooks/useSEO';
const seo = useSEO('home');

// After
import { useSEOFromSanity } from '../hooks/useSEOFromSanity';
const seo = useSEOFromSanity('home');
```

## Advanced Features

### 1. Dynamic Sitemap Generation
```typescript
// Generate sitemap from Sanity data
const sitemapData = await sanityFetch.getSitemapData();
```

### 2. Redirect Management
Add redirects directly in Sanity:
- Old URL → New URL
- 301 (permanent) or 302 (temporary)

### 3. A/B Testing SEO
Create multiple versions of SEO settings and test performance

### 4. Multi-language Support
Extend schemas to support multiple languages:
```javascript
{
  name: 'title',
  type: 'localeString', // Custom type for i18n
}
```

## Monitoring & Optimization

### SEO Score Tracking
The system includes an SEO score field that can be calculated based on:
- Title length and keyword usage
- Description quality
- Image optimization
- Structured data presence

### Last Modified Tracking
Automatically tracks when pages are updated for sitemap accuracy

### Analytics Integration
Connect with Google Analytics to track:
- Organic traffic changes
- Keyword performance
- Page engagement metrics

## Troubleshooting

### Issue: CORS Errors
**Solution**: Ensure your domain is added to Sanity CORS origins

### Issue: No Data Showing
**Solution**: 
1. Check that migration ran successfully
2. Verify Sanity connection in browser console
3. Ensure environment variables are set

### Issue: Slow Loading
**Solution**: 
1. Enable Sanity CDN (`useCdn: true`)
2. Implement caching strategy
3. Use React Suspense for loading states

## Next Steps

1. **Content Migration**: Move page content (hero text, descriptions) to Sanity
2. **Image Management**: Upload all images to Sanity for centralized management
3. **Preview Mode**: Implement draft preview functionality
4. **Webhook Integration**: Auto-rebuild on content changes
5. **Performance Monitoring**: Set up tracking for Core Web Vitals

## Benefits of This Setup

✅ **Centralized Control**: Manage all SEO from one place
✅ **No Code Changes**: Update SEO without deploying
✅ **Version History**: Track all SEO changes over time
✅ **Collaboration**: Multiple team members can manage content
✅ **Real-time Updates**: Changes reflect immediately
✅ **Structured Data**: Automatic schema.org generation
✅ **Scalability**: Easy to add new pages and content types

Your website now has enterprise-level SEO management capabilities while maintaining its beautiful design and animations!
