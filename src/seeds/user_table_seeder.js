/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('users').insert([
          {
            name: 'Prajwol Prajapati',
            email: 'prajwol@gmail.com',
            password: 'password'
          },
          {
            name: 'Safal Pandey',
            email: 'safal@gmail.com',
            password: 'password'
            
          }
        ])
      ]);
    });
}