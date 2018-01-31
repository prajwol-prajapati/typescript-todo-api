import * as Knex from 'knex';
/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('tags', table => {
    table.increments();
    table.string('tag_name').notNullable();
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
export function down(knex: Knex):Knex.SchemaBuilder {
  return knex.schema.dropTable('tags_todos').dropTable('tags');
}