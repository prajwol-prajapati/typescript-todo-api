import * as Knex from 'knex';

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('session', table => {
    table.increments();
    table.text('refresh_token').notNullable();
    table
      .integer('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable();
    table
      .string('email')
      .unique()
      .notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('session');
}