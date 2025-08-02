# Sanity CMS Integration Setup Guide

## What We've Completed

### 1. Sanity Studio Setup
- Created a Sanity Studio project in the `caroline-fu-psychiatry` directory
- Project ID: `9ko39o08`
- Dataset: `production`
- Configured schemas for:
  - Pages
  - Services
  - Practice Information
  - Staff Profiles
  - SEO Settings
  - Announcements

### 2. React App Integration
- Created Sanity client configuration in `src/sanity/config.ts`
- Created query functions in `src/sanity/queries.ts`
- Created TypeScript types in `src/sanity/types.ts`
- Created a custom hook `useSanity` in `src/hooks/useSanity.ts`
- Added a test component `SanityTest` to verify the connection

### 3. Environment Variables
- Created `.env` file with:
  ```
  REACT_APP_SANITY_PROJECT_ID=9ko39o08
  REACT_APP_SANITY_DATASET=production
  REACT_APP_SANITY_API_VERSION=2024-01-01
  ```

## Current Issue: CORS Configuration

The React app is unable to fetch data from Sanity due to CORS restrictions. This is a security feature that prevents unauthorized domains from accessing your Sanity data.

## Next Steps to Complete the Setup

### 1. Configure CORS in Sanity Management Console

You need to add your domains to the CORS origins list in Sanity:

1. Go to https://www.sanity.io/manage
2. Select your project (caroline-fu-psychiatry)
3. Navigate to Settings → API
4. Under "CORS Origins", add the following origins:
   - `http://localhost:3000`
   - `http://localhost:3001`
   - `https://caroline-fu-psychiatry.vercel.app`
   - Any other domains where your app will be hosted

5. Save the changes

### 2. Create Initial Content

Once CORS is configured, you can access Sanity Studio to create content:

1. In a terminal, navigate to the `caroline-fu-psychiatry` directory
2. Run `npm run dev` to start Sanity Studio
3. Open http://localhost:3333 in your browser
4. Sign in with your Sanity account
5. Create some initial content for testing

### 3. Test the Integration

After configuring CORS and creating content:

1. Start your React app: `npm start`
2. Navigate to the homepage
3. Look for the "Sanity CMS Integration Test" accordion at the bottom
4. Click to expand it and verify that data is being fetched successfully

### 4. Remove Test Component

Once verified, remove the test component from production:

1. Remove the SanityTest component from `src/pages/Home/HomePage.tsx`
2. Delete the `src/components/ui/SanityTest` directory

## Using Sanity in Your Components

Here's an example of how to use Sanity data in your components:

```typescript
import { useSanity } from '../../hooks/useSanity';

const MyComponent = () => {
  const { data: services, loading, error } = useSanity('service');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {services?.map(service => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};
```

## Deployment Considerations

### For Vercel Deployment:
1. Add environment variables in Vercel dashboard:
   - `REACT_APP_SANITY_PROJECT_ID`
   - `REACT_APP_SANITY_DATASET`
   - `REACT_APP_SANITY_API_VERSION`

2. Ensure your production domain is added to Sanity CORS origins

### For Sanity Studio Deployment:
You can deploy Sanity Studio separately:
```bash
cd caroline-fu-psychiatry
npm run deploy
```

This will deploy your Studio to https://caroline-fu-psychiatry.sanity.studio

## Troubleshooting

### CORS Errors
- Ensure all your domains are added to Sanity CORS origins
- Check that you're using the correct project ID and dataset
- Clear browser cache and cookies

### No Data Showing
- Verify content exists in Sanity Studio
- Check that queries are correct
- Ensure dataset name matches (production/development)

### TypeScript Errors
- Run `npm run build` to check for type errors
- Update types in `src/sanity/types.ts` if schema changes

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity React Integration Guide](https://www.sanity.io/guides/sanity-nextjs-tailwindcss)
- [GROQ Query Cheat Sheet](https://www.sanity.io/docs/groq)
