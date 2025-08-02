export default {
  name: 'practiceInfo',
  title: 'Practice Information',
  type: 'document',
  fields: [
    {
      name: 'practiceName',
      title: 'Practice Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short phrase that describes your practice',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'zipCode',
          title: 'ZIP Code',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'fax',
          title: 'Fax',
          type: 'string',
        },
      ],
    },
    {
      name: 'hours',
      title: 'Office Hours',
      type: 'object',
      fields: [
        {
          name: 'monday',
          title: 'Monday',
          type: 'string',
        },
        {
          name: 'tuesday',
          title: 'Tuesday',
          type: 'string',
        },
        {
          name: 'wednesday',
          title: 'Wednesday',
          type: 'string',
        },
        {
          name: 'thursday',
          title: 'Thursday',
          type: 'string',
        },
        {
          name: 'friday',
          title: 'Friday',
          type: 'string',
        },
        {
          name: 'saturday',
          title: 'Saturday',
          type: 'string',
        },
        {
          name: 'sunday',
          title: 'Sunday',
          type: 'string',
        },
      ],
    },
    {
      name: 'insurance',
      title: 'Insurance Accepted',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'emergencyInfo',
      title: 'Emergency Information',
      type: 'text',
      description: 'Information for patients in case of emergency',
    },
    {
      name: 'parkingInfo',
      title: 'Parking Information',
      type: 'text',
      description: 'Information about parking options',
    },
  ],
  preview: {
    select: {
      title: 'practiceName',
      subtitle: 'tagline',
    },
  },
}
