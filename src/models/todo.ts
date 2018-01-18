import bookshelf from '../config/db';
import * as Bookshelf from 'bookshelf';
import User from './user';

const TABLE_NAME = 'todos';

//Todo's model

class Todo extends bookshelf.Model<Todo> {
    get tableName() {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true;
    }

    user(): Bookshelf.Collection<User> {
        return this.hasOne(User);
    }

}
export default Todo;
