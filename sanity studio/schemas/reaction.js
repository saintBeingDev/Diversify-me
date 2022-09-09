export default {
    name: 'reaction',
    type: 'document',
    title: 'Reaction',
    liveEdit:'true',
    fields: [
      {
        name: 'Like',
        type: 'number',
        initialValue: 0,
      },
      {
        name: 'Love',
        type: 'number',
        initialValue: 0,
      },
      {
        name: 'Party',
        type: 'number',
        initialValue: 0,
      },
      {
        name: 'Claps',
        type: 'number',
        initialValue: 0,
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
  