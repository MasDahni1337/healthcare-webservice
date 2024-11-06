require("env2")(".env");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_DEFAULT_HOST,
      user: process.env.DB_DEFAULT_USERNAME,
      password: process.env.DB_DEFAULT_PASSWORD,
      database: process.env.DB_DEFAULT_DATABASE,
      port: parseInt(process.env.DB_DEFAULT_PORT, 10)
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
      host: process.env.DB_DEFAULT_HOST,
      user: process.env.DB_DEFAULT_USERNAME,
      password: process.env.DB_DEFAULT_PASSWORD,
      database: process.env.DB_DEFAULT_DATABASE,
      port: parseInt(process.env.DB_DEFAULT_PORT, 10)
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
      host: process.env.DB_DEFAULT_HOST,
      user: process.env.DB_DEFAULT_USERNAME,
      password: process.env.DB_DEFAULT_PASSWORD,
      database: process.env.DB_DEFAULT_DATABASE,
      port: parseInt(process.env.DB_DEFAULT_PORT, 10)
    },
    migrations: {
      directory: './app/Database/Migrations'
    },
    seeds: {
      directory: './app/Database/Seeds'
    }
  }

};
