require("env2")(".env");
const Service = require('./Service.js');

/**
 * Represents a database service.
 * @class
 * @extends Service
 */
class Database extends Service {
  /**
   * Default configurations for the database.
   * @type {Object}
   * @memberof Database
   */
  static configurations = {
    default: {
      client: 'pg',
      debug: true,
      connection: {
        host: process.env.DB_DEFAULT_HOST,
        user: process.env.DB_DEFAULT_USERNAME,
        password: process.env.DB_DEFAULT_PASSWORD,
        database: process.env.DB_DEFAULT_DATABASE,
        timezone: '+07:00',
        charset: 'utf8',
        port: parseInt(process.env.DB_DEFAULT_PORT, 10)
      },
      pool: {
        min: 0,
        max: 7,
        acquireTimeoutMillis: 10000,
        createTimeoutMillis: 10000,
        idleTimeoutMillis: 120000,
        reapIntervalMillis: 10000,
      },
    },
  };

  /**
   * Creates an instance of Database.
   * @param {string} [optionName='default'] - The configuration option to use.
   * @memberof Database
   */
  constructor(optionName = 'default') {
    const options = Database.configurations[optionName];
    super(options);
  }
}

module.exports = Database;
