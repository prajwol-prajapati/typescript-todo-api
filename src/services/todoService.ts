import * as Boom from 'boom';
import knex from '../config/db';
import lang from '../utils/lang';
import UpdateBody from '../domain/UpdateBody';
import createTodo from '../domain/createTodo';
import Todo from '../models/todo';

export function fetchAllTodo(): Promise<{}> {
    return Todo.fetchAll()
      .then((data: {}) => ({ data }));
}

export function createTodo(body: createTodo): Promise<{}> {
  return new Todo({ 
    name: body.name,
    done: false, 
    user_id: 1
  })
    .save()
    .then((data) => data.refresh());
}