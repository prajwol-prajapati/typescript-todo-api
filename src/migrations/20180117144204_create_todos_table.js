/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table.string('name').notNull();
    table
      .boolean('done')
      .notNull()
      .defaultTo(false);
    table
      .integer('user_id')
      .unsigned()
      .notNull();
    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE');
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('todos');
}