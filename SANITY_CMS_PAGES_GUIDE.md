# Making Your Pages Editable via Sanity - Complete Guide

## Overview

Your website is now set up to make all pages fully editable through Sanity CMS. This guide explains how to use the new system and extend it to other pages.

## What We've Built for the Home Page

### 1. **Comprehensive Home Page Schema**
The `homePage` schema includes all content sections:
- **Hero Section**: Title, subtitle, description, button, image, feature cards
- **Services Section**: Section title, description, 3 service cards
- **About Section**: Title, descriptions, image, feature list
- **Virtual & In-Person Section**: Title, description, 2 option cards
- **CTA Section**: Title, description, buttons

### 2. **Content Migration**
- All home page content has been migrated to Sanity
- Content is now live and editable in Sanity Studio

### 3. **Queries & Fetch Functions**
- `getHomePage` query to fetch all home page data
- Includes image URL resolution

## How to Access and Edit Content

### 1. **Access Sanity Studio**
```bash
cd caroline-fu-psychiatry
npm run dev
```
Visit http://localhost:3333

### 2. **Edit Home Page Content**
1. Sign in to Sanity Studio
2. Click on "Home Page" in the sidebar
3. Navigate through tabs:
   - **Hero Section**: Edit main hero content
   - **Services Section**: Manage service cards
   - **About Section**: Update about content
   - **Virtual & In-Person**: Edit care options
   - **CTA Section**: Update call-to-action

### 3. **Upload Images**
- Click on image fields
- Upload new images
- Use hotspot to control focal point

## Integrating Sanity Content in React

### Option 1: Direct Integration (Quick Start)
```typescript
import { useEffect, useState } from 'react';
import { sanityFetch } from '../../sanity/queries';

const HomePage = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await sanityFetch.getHomePage();
        setContent(data);
      } catch (error) {
        console.error('Error fetching home page:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchContent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!content) return <div>No content found</div>;

  // Use content.heroSection, content.servicesSection, etc.
};
```

### Option 2: Custom Hook (Recommended)
```typescript
// hooks/useHomePageContent.ts
import { useEffect, useState } from 'react';
import { sanityFetch } from '../sanity/queries';

export const useHomePageContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityFetch.getHomePage()
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
};
```

## Making Other Pages Editable

### Step 1: Create Page Schema
Example for About Page:
```typescript
// caroline-fu-psychiatry/schemaTypes/aboutPage.ts
export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Add your fields here
  ]
}
```

### Step 2: Add to Schema Index
```typescript
// caroline-fu-psychiatry/schemaTypes/index.ts
import aboutPage from './aboutPage'
// ... add to exports
```

### Step 3: Create Migration Script
```javascript
// src/scripts/migrateAboutPageToSanity.js
// Similar to migrateHomePageToSanity.js
```

### Step 4: Add Query
```typescript
// src/sanity/queries.ts
getAboutPage: `*[_type == "aboutPage"][0]{...}`
```

### Step 5: Update React Component
Replace hardcoded content with Sanity data

## Best Practices

### 1. **Content Structure**
- Group related fields using tabs
- Use descriptive field names
- Add helpful descriptions
- Set appropriate validations

### 2. **Image Handling**
- Always include alt text fields
- Use hotspot for better cropping
- Consider responsive image sizes

### 3. **Performance**
- Cache content when possible
- Use loading states
- Handle errors gracefully
- Consider static generation for production

### 4. **Fallbacks**
During transition, use fallbacks:
```typescript
const title = content?.heroSection?.title || 'Default Title';
```

## Common Patterns

### Rich Text Content
For long-form content, use Sanity's block content:
```typescript
{
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [{type: 'block'}]
}
```

### Reusable Components
Create shared schemas for common elements:
```typescript
// schemas/objects/button.ts
export default {
  name: 'button',
  type: 'object',
  fields: [
    {name: 'text', type: 'string'},
    {name: 'link', type: 'string'},
    {name: 'style', type: 'string', options: {list: ['primary', 'secondary']}}
  ]
}
```

### Section Visibility
Use boolean fields to show/hide sections:
```typescript
if (!content.heroSection.enabled) return null;
```

## Troubleshooting

### Content Not Updating
1. Check Sanity Studio for published changes
2. Clear browser cache
3. Verify API permissions

### Images Not Loading
1. Check image upload in Sanity
2. Verify image URL resolution
3. Check CORS settings

### Performance Issues
1. Implement caching strategy
2. Use CDN for images
3. Consider static site generation

## Next Steps

1. **Complete Home Page Integration**
   - Update HomePage.tsx to use Sanity content
   - Test all sections with live data

2. **Extend to Other Pages**
   - Services pages
   - About page
   - Contact page

3. **Advanced Features**
   - Preview mode
   - Content versioning
   - Scheduled publishing

## Benefits

✅ **No-code content updates**
✅ **Visual content editing**
✅ **Image management**
✅ **SEO optimization**
✅ **Content versioning**
✅ **Multi-user collaboration**

Your website now has professional CMS capabilities while maintaining its beautiful design and animations!
