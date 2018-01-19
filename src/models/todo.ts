import bookshelf from '../config/db';
import * as Bookshelf from 'bookshelf';
import User from './user';
import Tag from './tag';

const TABLE_NAME = 'todos';

//Todo's model

class Todo extends bookshelf.Model<Todo> {
    get tableName() {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true;
    }

    user(): User {
        return this.hasOne(User);
    }

    tag(): Bookshelf.Collection<Tag> {
        return this.belongsToMany(Tag);
    }

}
export default Todo;
