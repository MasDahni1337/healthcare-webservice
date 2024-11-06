// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'dahni',
      password: '1',
      database: 'healthcare',
      port: 5432
    },
    migrations: {
      directory: './app/Database/Migrations'
    },
    seeds: {
      directory: './app/Database/Seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'dahni',
      password: '1',
      database: 'healthcare',
      port: 5432
    },
    migrations: {
      directory: './app/Database/Migrations'
    },
    seeds: {
      directory: './app/Database/Seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'dahni',
      password: '1',
      database: 'healthcare',
      port: 5432
    },
    migrations: {
      directory: './app/Database/Migrations'
    },
    seeds: {
      directory: './app/Database/Seeds'
    }
  }

};
