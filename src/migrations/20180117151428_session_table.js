/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('table_name', table => {
    table.increments();
    table.text('refresh_token').notNull();
    table.integer('user_id').notNull();
    table
      .string('email')
      .unique()
      .notNull();
    table.timestamp(true, true);
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('table_name');
}