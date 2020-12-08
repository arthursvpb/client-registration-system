const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "eyqa231f",
    database: "clientregistrationsystem",
  },
});

module.exports = knex;
