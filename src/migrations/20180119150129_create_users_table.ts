import * as Knex from 'knex';

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('users');
}