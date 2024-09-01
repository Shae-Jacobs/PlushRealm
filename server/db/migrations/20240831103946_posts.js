/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('likes')
    table.string('caption')
    table.string('post_image')
    table.string('comments')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('posts')
}
