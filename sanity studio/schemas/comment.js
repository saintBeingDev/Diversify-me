export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    liveEdit:'true',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Comments won't show on the site without approval"
      },   
      {
        name: 'email',
        type: 'string',
        readOnly:true,
      },
      {
        name: 'comment',
        type: 'text',
        readOnly:true,
      },
      {
        name: 'post',
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }
    ],
  }
  