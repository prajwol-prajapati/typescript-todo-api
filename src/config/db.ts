import config from './config';
import * as client from 'knex';
import * as bookshelfJs from 'bookshelf';

/**
 * Database connection.
 */
const knex = client(config.database);



//database connection

const bookshelf = bookshelfJs(knex);

bookshelf.plugin([
    'virtuals',
    'pagination',
    'visibility',
    'bookshelf-camelcase'
]);

export default bookshelf;
