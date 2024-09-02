export async function seed(knex) {
  // Deletes ALL existing entries in users table
  await knex('users').del()

  // Inserts seed entries into users table
  await knex('users').insert([
    {
      id: 1,
      user_name: 'Kuromi',
      profile_picture: 'https://i.imgur.com/kNOvaf2.png',
      bio: '💀 Punk Rock Princess 🖤🎸',
    },
    {
      id: 2,
      user_name: 'Cinnamoroll',
      profile_picture: 'https://i.imgur.com/FOtvJNN.png',
      bio: '☁️ Fluffy Puppy ✨ | Café Cutie 🍰',
    },
    {
      id: 3,
      user_name: 'Totoro',
      profile_picture: 'https://i.imgur.com/scqAblR.png',
      bio: '🌳 Forest Spirit | Guardian of the Woods 🌱',
    },
  ])
}
