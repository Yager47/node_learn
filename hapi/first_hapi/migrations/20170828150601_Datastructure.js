
exports.up = function(knex, Promise) {
  
  return knex
          .schema
          .createTable('users', function(t) {

            // primary key
            t.increments();

            // data
            t.string('name',      50).notNullable();
            t.string('username',  50).notNullable().unique();
            t.string('email',    250).notNullable().unique();
            t.string('password', 128).notNullable();
            t.string('guid',      50).notNullable().unique();

            t.timestamp('created_at').notNullable();
          })

          .createTable('birds', function(t) {

            // primary key
            t.increments();
            t.string('owner', 36).references('guid').inTable('users');

            // data
            t.string( 'name',        250).notNullable();
            t.string( 'species',     250).notNullable();
            t.string( 'picture_url', 250).notNullable();
            t.string( 'guid',         36).notNullable().unique();
            t.boolean('isPublic'        ).notNullable().defaultTo(true);

            t.timestamp('created_at').notNullable();
          });
};

exports.down = function(knex, Promise) {
  
  return knex
          .schema
          .dropTableIfExists('birds')
          .dropTableIfExists('users');
};
