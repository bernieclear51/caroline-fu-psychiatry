export default {
  name: 'announcement',
  title: 'Announcements',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Announcement Type',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Urgent', value: 'urgent'},
          {title: 'Update', value: 'update'},
          {title: 'Holiday', value: 'holiday'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Whether this announcement is published',
      initialValue: true,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'expiresAt',
      title: 'Expires At',
      type: 'datetime',
      description: 'When this announcement should no longer be displayed',
    },
    {
      name: 'showOnHomepage',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Whether to display this announcement on the homepage',
      initialValue: true,
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Chinese', value: 'zh'},
        ],
      },
      initialValue: 'en',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      published: 'published',
    },
    prepare({title, subtitle, published}: {title: string; subtitle: string; published: boolean}) {
      return {
        title,
        subtitle: `${subtitle} ${published ? '(Published)' : '(Draft)'}`,
      }
    },
  },
}
