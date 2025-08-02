// Migration script to import existing SEO data into Sanity
// Run this script with: node src/scripts/migrateSEOToSanity.js

const { createClient } = require('@sanity/client');
const globalSEO = require('../data/seo/global.json');
const pagesSEO = require('../data/seo/pages.json');

// Sanity client configuration
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '9ko39o08',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // You'll need to add this to your .env
  useCdn: false,
});

async function migrateGlobalSettings() {
  console.log('Migrating global settings...');
  
  const globalSettingsDoc = {
    _id: 'globalSettings',
    _type: 'globalSettings',
    siteName: globalSEO.siteName,
    siteUrl: globalSEO.siteUrl,
    siteDescription: globalSEO.siteDescription,
    defaultMetaTitle: '{page} | Dr. Caroline Fu, DO',
    defaultMetaDescription: globalSEO.siteDescription,
    defaultKeywords: [
      'psychiatrist',
      'mental health',
      'Cambridge MA',
      'therapy',
      'medication management',
    ],
    robots: globalSEO.defaultMeta.robots,
    twitterHandle: globalSEO.socialMedia.twitter.site.replace('@', ''),
    twitterCardType: globalSEO.socialMedia.twitter.card,
    organizationName: globalSEO.organization.name,
    organizationType: 'MedicalOrganization',
    address: {
      streetAddress: globalSEO.organization.address.streetAddress,
      addressLocality: globalSEO.organization.address.addressLocality,
      addressRegion: globalSEO.organization.address.addressRegion,
      postalCode: globalSEO.organization.address.postalCode,
      addressCountry: globalSEO.organization.address.addressCountry,
    },
    telephone: globalSEO.organization.telephone,
    email: globalSEO.organization.email,
    priceRange: globalSEO.organization.priceRange,
    paymentAccepted: globalSEO.organization.paymentAccepted,
    currenciesAccepted: globalSEO.organization.currenciesAccepted,
    physicianName: globalSEO.physician.name,
    physicianTitle: 'DO',
    physicianJobTitle: globalSEO.physician.jobTitle,
    medicalSpecialty: globalSEO.physician.medicalSpecialty,
    alumniOf: globalSEO.physician.alumniOf,
    memberOf: globalSEO.physician.memberOf,
  };

  try {
    await client.createOrReplace(globalSettingsDoc);
    console.log('✅ Global settings migrated successfully');
  } catch (error) {
    console.error('❌ Error migrating global settings:', error);
  }
}

async function migratePageSEO() {
  console.log('Migrating page SEO settings...');
  
  for (const [pageName, pageData] of Object.entries(pagesSEO)) {
    const seoDoc = {
      _type: 'seoSettings',
      pageSlug: pageData.canonical || `/${pageName === 'home' ? '' : pageName}`,
      pageName: pageName,
      title: pageData.title,
      description: pageData.description,
      keywords: pageData.keywords || [],
      focusKeyword: pageData.keywords?.[0] || '',
      canonicalUrl: `${globalSEO.siteUrl}${pageData.canonical}`,
      priority: pageData.priority || 0.5,
      changeFrequency: pageData.changeFreq || 'monthly',
      ogType: pageData.ogType || 'website',
      structuredData: pageData.schema ? JSON.stringify(pageData.schema, null, 2) : '',
    };

    try {
      const result = await client.create(seoDoc);
      console.log(`✅ SEO settings for "${pageName}" migrated successfully`);
    } catch (error) {
      console.error(`❌ Error migrating SEO for "${pageName}":`, error);
    }
  }
}

async function runMigration() {
  console.log('Starting SEO migration to Sanity...\n');
  
  // Check if we have a write token
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is not set in your environment variables.');
    console.log('\nTo get a write token:');
    console.log('1. Go to https://www.sanity.io/manage');
    console.log('2. Select your project');
    console.log('3. Go to Settings → API');
    console.log('4. Create a new token with write permissions');
    console.log('5. Add it to your .env file as SANITY_WRITE_TOKEN=your-token-here');
    return;
  }

  try {
    await migrateGlobalSettings();
    await migratePageSEO();
    
    console.log('\n✅ Migration completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Go to your Sanity Studio (http://localhost:3333)');
    console.log('2. Check the imported data');
    console.log('3. Add any missing images or additional content');
    console.log('4. Update your React app to use Sanity data instead of JSON files');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
  }
}

// Run the migration
runMigration();
