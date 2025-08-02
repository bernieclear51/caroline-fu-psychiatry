export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    {
      name: 'site',
      title: 'Site Information',
      default: true,
    },
    {
      name: 'seo',
      title: 'Default SEO',
    },
    {
      name: 'social',
      title: 'Social Media',
    },
    {
      name: 'organization',
      title: 'Organization',
    },
    {
      name: 'physician',
      title: 'Physician Info',
    },
  ],
  fields: [
    // Site Information
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'The name of your website',
      validation: (Rule: any) => Rule.required(),
      group: 'site',
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'The main URL of your website',
      validation: (Rule: any) => Rule.required(),
      group: 'site',
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Default description for your website',
      validation: (Rule: any) => Rule.required(),
      group: 'site',
    },
    {
      name: 'defaultImage',
      title: 'Default Share Image',
      type: 'image',
      description: 'Default image for social media sharing',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      group: 'site',
    },
    
    // Default SEO
    {
      name: 'defaultMetaTitle',
      title: 'Default Meta Title',
      type: 'string',
      description: 'Default title template (use {page} as placeholder)',
      initialValue: '{page} | Dr. Caroline Fu, DO',
      group: 'seo',
    },
    {
      name: 'defaultMetaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      description: 'Fallback meta description',
      group: 'seo',
    },
    {
      name: 'defaultKeywords',
      title: 'Default Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Default keywords for all pages',
      group: 'seo',
    },
    {
      name: 'robots',
      title: 'Robots Meta',
      type: 'string',
      description: 'Default robots meta tag',
      initialValue: 'index, follow',
      group: 'seo',
    },
    {
      name: 'googleSiteVerification',
      title: 'Google Site Verification',
      type: 'string',
      description: 'Google Search Console verification code',
      group: 'seo',
    },
    
    // Social Media
    {
      name: 'facebookAppId',
      title: 'Facebook App ID',
      type: 'string',
      description: 'Facebook App ID for analytics',
      group: 'social',
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'Twitter username (without @)',
      group: 'social',
    },
    {
      name: 'twitterCardType',
      title: 'Default Twitter Card Type',
      type: 'string',
      options: {
        list: [
          {title: 'Summary', value: 'summary'},
          {title: 'Summary Large Image', value: 'summary_large_image'},
        ],
      },
      initialValue: 'summary_large_image',
      group: 'social',
    },
    {
      name: 'socialProfiles',
      title: 'Social Media Profiles',
      type: 'object',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'youtube', type: 'url', title: 'YouTube'},
      ],
      group: 'social',
    },
    
    // Organization Information
    {
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      description: 'Legal name of the practice',
      validation: (Rule: any) => Rule.required(),
      group: 'organization',
    },
    {
      name: 'organizationType',
      title: 'Organization Type',
      type: 'string',
      options: {
        list: [
          {title: 'Medical Organization', value: 'MedicalOrganization'},
          {title: 'Medical Business', value: 'MedicalBusiness'},
          {title: 'Physician', value: 'Physician'},
        ],
      },
      initialValue: 'MedicalOrganization',
      group: 'organization',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'streetAddress',
          type: 'string',
          title: 'Street Address',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'addressLocality',
          type: 'string',
          title: 'City',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'addressRegion',
          type: 'string',
          title: 'State/Region',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'postalCode',
          type: 'string',
          title: 'Postal Code',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'addressCountry',
          type: 'string',
          title: 'Country',
          initialValue: 'US',
          validation: (Rule: any) => Rule.required(),
        },
      ],
      group: 'organization',
    },
    {
      name: 'telephone',
      title: 'Phone Number',
      type: 'string',
      description: 'Main contact phone number',
      validation: (Rule: any) => Rule.required(),
      group: 'organization',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Main contact email',
      validation: (Rule: any) => Rule.required(),
      group: 'organization',
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      description: 'Price range indicator (e.g., $$$)',
      initialValue: '$$$',
      group: 'organization',
    },
    {
      name: 'paymentAccepted',
      title: 'Payment Methods Accepted',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Cash', value: 'Cash'},
          {title: 'Check', value: 'Check'},
          {title: 'Credit Card', value: 'Credit Card'},
          {title: 'Insurance', value: 'Insurance'},
          {title: 'HSA/FSA', value: 'HSA/FSA'},
        ],
      },
      group: 'organization',
    },
    {
      name: 'currenciesAccepted',
      title: 'Currencies Accepted',
      type: 'string',
      initialValue: 'USD',
      group: 'organization',
    },
    {
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'dayOfWeek',
              type: 'string',
              title: 'Day of Week',
              options: {
                list: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                  'Friday', 'Saturday', 'Sunday'
                ],
              },
            },
            {
              name: 'opens',
              type: 'string',
              title: 'Opens',
              description: 'Opening time (e.g., 09:00)',
            },
            {
              name: 'closes',
              type: 'string',
              title: 'Closes',
              description: 'Closing time (e.g., 17:00)',
            },
          ],
        },
      ],
      group: 'organization',
    },
    
    // Physician Information
    {
      name: 'physicianName',
      title: 'Physician Name',
      type: 'string',
      description: 'Full name of the physician',
      validation: (Rule: any) => Rule.required(),
      group: 'physician',
    },
    {
      name: 'physicianTitle',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., DO, MD, etc.',
      validation: (Rule: any) => Rule.required(),
      group: 'physician',
    },
    {
      name: 'physicianJobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., Board-Certified Psychiatrist',
      validation: (Rule: any) => Rule.required(),
      group: 'physician',
    },
    {
      name: 'medicalSpecialty',
      title: 'Medical Specialties',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Areas of specialization',
      group: 'physician',
    },
    {
      name: 'alumniOf',
      title: 'Education',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Educational institutions attended',
      group: 'physician',
    },
    {
      name: 'memberOf',
      title: 'Professional Memberships',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Professional organizations',
      group: 'physician',
    },
    {
      name: 'physicianImage',
      title: 'Physician Photo',
      type: 'image',
      description: 'Professional photo of the physician',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      group: 'physician',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
        subtitle: 'Site-wide configuration',
      }
    },
  },
}
