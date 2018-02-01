import * as Boom from 'boom';
import knex from '../config/db';
import lang from '../utils/lang';
import Tag from '../models/tag';
import * as BlueBird from 'bluebird';
import { Collection, Model } from 'bookshelf';

export function fetchAllTags(): BlueBird<Collection<Tag>> {
  return Tag.fetchAll();
}