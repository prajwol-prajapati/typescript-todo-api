import * as Boom from 'boom';
import knex from '../config/db';
import lang from '../utils/lang';
import UpdateTodo from '../domain/UpdateTodo';
import createTodo from '../domain/createTodo';
import Todo from '../models/todo';
import * as BlueBird from 'bluebird';
import { Collection, Model } from 'bookshelf';

export function fetchAllTodo(): BlueBird<Collection<Todo>> {
    return Todo.fetchPage({
      page: 1,
      pageSize: 5,
      withRelated: ['tags']
    })
    .then((data: {}) => ({ data }));
}

export function createTodo(body: createTodo, id: number): BlueBird<Todo> {
  console.log(body);
  return new Todo({ 
    name: body.name,
    done: body.done, 
    user_id: id
  })
    .save()
    .then((data) => {
      data.refresh();
      data.tag().attach(body.tagId);
      return data;
    });
}

export function getTodoById(id: number): BlueBird<{}> {
  return new Todo({ id }).fetch()
  .then(todo => {
    if(!todo) {
      throw Boom.notFound(lang.todoNotFound);
    }
    return {data: todo};
  })
}

export function editTodo(id: number, body: UpdateTodo): BlueBird<Todo> {
  return new Todo({ id })
  .save({ name: body.name, done: body.done })
  .then(todo => todo.refresh());
}

export function removeTodo(id: number): BlueBird<Todo> {
  console.log(id);
  return new Todo({ id })
    .fetch()
    .then(todo => todo.destroy());
}