require('ts-node/register');

export = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'c:/Projects/BotWhats/src/core/database/dev.sqlite3'
    },
    migrations:{
      directory: "c:/Projects/BotWhats/src/core/database/migrations"
    },
    seeds:{
      directory: "c:/Projects/BotWhats/src/core/database/seeds"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};


