export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  // liveEdit:true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description:'Let reader know what you are writing about in around 100 words',
      type: 'string',
      validation: Rule => Rule.max(100)
    },
    {
      title: 'Time to read',
      description:'Time taken by user to read the post',
      name: 'readTime',
      type: 'number',
      validation: Rule => Rule.required().min(10).warning('posts should be read under 10 mins')

    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'featuredPost',
      title: 'Featured Post',
      description:'is post a featured one?',
      type: 'boolean',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'party',
      title: 'Party',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'claps',
      title: 'Claps',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'love',
      title: 'Love',
      type: 'number',
      initialValue: 0
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
