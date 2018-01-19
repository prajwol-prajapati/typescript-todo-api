/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('tags', table => {
    table.increments();
    table.string('tag_name').notNull();
    table.timestamps(true, true);
  })
  .createTable('tags_todos', table => {
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