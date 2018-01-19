import bookshelf from '../config/db';
import * as Bookshelf from 'bookshelf';
import Todo from './todo';

const TABLE_NAME = 'tags';

//Tag model

class Tag extends bookshelf.Model<Tag>{
    get tableName() {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true;
    }

    todo(): Bookshelf.Collection<Todo> {
        return this.belongsToMany(Todo);
    }

}

export default Tag;