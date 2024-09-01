export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()

  // Inserts seed entries
  await knex('user').insert([
    {
      id: 1,
      user_name: 'Kuromi',
      profile_picture: 'https://imgur.com/kNOvaf2',
      bio: '💀 Punk Rock Princess 🖤🎸',
    },
    {
      id: 2,
      user_name: 'Cinnamoroll',
      profile_picture: 'https://imgur.com/FOtvJNN',
      bio: '☁️ Fluffy Puppy ✨ | Café Cutie 🍰',
    },
    {
      id: 3,
      user_name: 'Totoro',
      profile_picture: 'https://imgur.com/scqAblR',
      bio: ' 🌳 Forest Spirit | Guardian of the Woods 🌱',
    },
  ])
}
