// database configuration file

module.exports = {

  development: {
    migrations: { tableName: 'knex_migrations' },
    seeds: { tablename: './seeds' },
    client: 'mysql',

    connection: {
      host:     'localhost',
      user:     'yager',
      password: 'password',
      database: 'first_hapi_db',
      charset:  'utf8'
    }
  }
};
