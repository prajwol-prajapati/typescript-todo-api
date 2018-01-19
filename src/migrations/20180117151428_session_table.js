/**
 * @param  {object} knex
 * @return {Promise}
 */
export async function up(knex) {
  return knex.schema.createTable('session', table => {
    table.increments();
    table.text('refresh_token').notNull();
    table
      .integer('user_id')
      .notNull();
    table
      .string('email')
      .unique()
      .notNull();
    table.timestamps(true, true);
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('session');
}