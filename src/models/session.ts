import bookshelf from '../config/db';
import * as Bookshelf from 'bookshelf';
import User from './user';

const TABLE_NAME = 'session';

class Session extends bookshelf.Model<Session> {
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

export default Session;
