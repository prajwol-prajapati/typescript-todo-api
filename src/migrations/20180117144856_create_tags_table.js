/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('tags', table => {
    table.increments();
    table.string('tag_name').notNull();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
  })
  .createTable('tags_todo_linker', table => {
    table
      .integer('todo_id')
      .references('todos.id')
      .onDelete('CASCADE');
    table
      .integer('tag_id')
      .references('tags.id')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('tags_todo_linker').dropTable('tags');
}