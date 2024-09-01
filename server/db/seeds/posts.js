export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()

  // Inserts seed entries
  await knex('posts').insert([
    {
      id: 1,
      user_id: 2,
      likes: 3,
      caption: 'First post! :)',
      post_image: 'https://imgur.com/mm5B6bw',
    },
    {
      id: 2,
      user_id: 3,
      likes: 2,
      caption: 'Look at me! Im so handsome :3',
      post_image: 'https://imgur.com/Q39t8HZ',
    },
    {
      id: 3,
      user_id: 1,
      likes: 1,
      caption: 'Getting ready to go see Kiki & Lala <3',
      post_image: 'https://imgur.com/BYfyv2P',
    },
  ])
}
