import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'num',
      title: 'Project Number',
      type: 'string',
      description: 'e.g., 01, 02, 03',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'e.g., ZERO-KNOWLEDGE, AI READING',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Accent Color (Hex)',
      type: 'string',
      description: 'e.g., #00D4FF',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentRGB',
      title: 'Accent RGB Values',
      type: 'string',
      description: 'e.g., 0,212,255',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'FontAwesome Icon Class',
      type: 'string',
      description: 'e.g., fas fa-shield-alt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'techTags',
      title: 'Tech Tags (for filtering)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Kotlin', value: 'kotlin'},
          {title: 'Java', value: 'java'},
          {title: 'Flutter', value: 'flutter'},
          {title: 'AI', value: 'ai'},
          {title: 'Security', value: 'security'},
        ],
      },
    }),
    defineField({
      name: 'pitch',
      title: 'Elevator Pitch',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'n', title: 'Technology Name', type: 'string' }),
            defineField({ name: 'p', title: 'Is Primary?', type: 'boolean' }),
          ],
        },
      ],
    }),
     defineField({
      name: 'screenshots',
      title: 'Media Gallery (Images & Videos)',
      type: 'array',
      description: 'Upload screenshots, or upload/paste video demos. They will appear together in a gallery.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'image', title: 'Upload Image', type: 'image', options: { hotspot: true } }),
            defineField({ 
              name: 'videoFile', 
              title: 'Or Upload Video (MP4/WebM)', 
              type: 'file', 
              options: { accept: 'video/mp4,video/webm,video/quicktime' } 
            }),
            defineField({ name: 'externalUrl', title: 'Or External URL (YouTube/MP4)', type: 'url' }),
          ],
        },
      ],
    }),
    
    defineField({
      name: 'highlight',
      title: 'Engineering Highlight',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Highlight Title', type: 'string' }),
        defineField({ name: 'text', title: 'Highlight Text', type: 'text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'future',
      title: 'Future Roadmap',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      media: 'screenshots.0.image',
    },
  },
})