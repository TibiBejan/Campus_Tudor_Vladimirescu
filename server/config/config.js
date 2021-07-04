module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PWD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "dialectOptions": {
      "useUTC": false
    },
    "timezone": "+03:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
