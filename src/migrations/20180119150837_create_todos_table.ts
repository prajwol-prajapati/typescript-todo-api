import * as Knex from 'knex';
/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table.string('name').notNullable();
    table
      .boolean('done')
      .notNullable()
      .defaultTo(false);
    table
      .integer('user_id')
      .unsigned()
      .notNullable();
    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('todos');
}