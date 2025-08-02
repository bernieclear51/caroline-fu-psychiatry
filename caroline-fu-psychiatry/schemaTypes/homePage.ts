export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
      default: true,
    },
    {
      name: 'services',
      title: 'Services Section',
    },
    {
      name: 'about',
      title: 'About Section',
    },
    {
      name: 'virtualInPerson',
      title: 'Virtual & In-Person Section',
    },
    {
      name: 'cta',
      title: 'CTA Section',
    },
  ],
  fields: [
    // Document Settings
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this page',
      initialValue: 'Home Page',
      readOnly: true,
    },
    
    // Hero Section
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'enabled',
          title: 'Show Hero Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main hero title',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Hero subtitle',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Hero description (supports HTML for styling)',
          rows: 3,
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'Internal link path (e.g., /new-patient)',
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          description: 'Small text below button (supports HTML)',
          rows: 2,
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
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
        },
        {
          name: 'featureCards',
          title: 'Feature Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  description: 'Optional link path',
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Icon identifier',
                  options: {
                    list: [
                      {title: 'Brain', value: 'brain'},
                      {title: 'Users', value: 'users'},
                      {title: 'Heart', value: 'heart'},
                      {title: 'Stethoscope', value: 'stethoscope'},
                    ],
                  },
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.max(4),
        },
      ],
    },
    
    // Services Section
    {
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      group: 'services',
      fields: [
        {
          name: 'enabled',
          title: 'Show Services Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
          description: 'Small text above title',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'services',
          title: 'Service Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{type: 'string'}],
                  validation: (Rule: any) => Rule.max(4),
                },
                {
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Service Link',
                  type: 'string',
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Brain', value: 'brain'},
                      {title: 'Heart', value: 'heart'},
                      {title: 'Mood Happy', value: 'mood-happy'},
                    ],
                  },
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.max(3),
        },
      ],
    },
    
    // About Section
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        {
          name: 'enabled',
          title: 'Show About Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'mainDescription',
          title: 'Main Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'secondaryDescription',
          title: 'Secondary Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
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
        },
        {
          name: 'imageCardTitle',
          title: 'Image Card Title',
          type: 'string',
          description: 'Title shown on the image card',
        },
        {
          name: 'imageCardFeatures',
          title: 'Image Card Features',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Feature list shown on image card',
        },
        {
          name: 'imageCardButtonText',
          title: 'Image Card Button Text',
          type: 'string',
        },
        {
          name: 'imageCardButtonLink',
          title: 'Image Card Button Link',
          type: 'string',
        },
      ],
    },
    
    // Virtual & In-Person Section
    {
      name: 'virtualInPersonSection',
      title: 'Virtual & In-Person Section',
      type: 'object',
      group: 'virtualInPerson',
      fields: [
        {
          name: 'enabled',
          title: 'Show Virtual & In-Person Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'options',
          title: 'Care Options',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Option Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Option Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Users', value: 'users'},
                      {title: 'Stethoscope', value: 'stethoscope'},
                    ],
                  },
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.length(2),
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text for the section CTA button',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        },
      ],
    },
    
    // CTA Section
    {
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      group: 'cta',
      fields: [
        {
          name: 'enabled',
          title: 'Show CTA Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'CTA Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
        },
        {
          name: 'primaryButtonLink',
          title: 'Primary Button Link',
          type: 'string',
        },
        {
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
        },
        {
          name: 'secondaryButtonLink',
          title: 'Secondary Button Link',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: 'Main landing page content',
      }
    },
  },
}
