import * as Boom from 'boom';
import knex from '../config/db';
import lang from '../utils/lang';
import UpdateBody from '../domain/UpdateBody';
import RegisterBody from '../domain/RegisterBody';
import User from '../models/user';

/**
 * Create user
 *
 * @param  {RegisterBody} body
 * @returns Promise
 */
export function createUser(body: RegisterBody): Promise<{}> {
  return new User({ 
    name: body.name,
    email: body.email, 
    password: body.password
  })
    .save()
    .then(user => user.refresh());
}

/**
 * Fetch user by id
 *
 * @param  {number} id
 */
export function findById(id: number) {
  return new User({ id }).fetch()
    .then((user: {}) => {
      if (!user) {
        throw Boom.notFound(lang.userNotFound);
      }

      return { data: user };
    });
}

/**
 * Fetch user by email
 *
 * @param  {string} email
 */
export function findByEmail(email: string) {
  return new User({ email }).fetch()
    .then((user: {}) => {
      if (!user) {
        throw Boom.notFound(lang.userNotFound);
      }

      return { data: user };
    });
}

/**
 * Fetch all user
 *
 * @returns Promise
 */
export function fetchAllUser(): Promise<{}> {
  return User.fetchAll();
}

/**
 * Update specific user
 *
 * @param  {UpdateBody} body
 * @returns Promise
 */
export function update(body: UpdateBody): Promise<{}> {
  // let id = body.id;
  return new User({ id: body.id })
    .save({ name: body.name, email: body.email, password: body.password })
    .then(user => user.refresh());
}

/**
 * Remove specific user
 *
 * @param  {number} id
 * @returns Promise
 */
export function removeUserById(id: number): Promise<{}> {
  console.log(id);
  return new User({ id })
    .fetch()
    .then(user => user.destroy());
}
