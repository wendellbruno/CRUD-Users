import knex from "knex";

const dataBaseDados = {
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "users",
};

/* export const databaseConnection = createConnection({
    host: host,
    user: user,
    password: password,
    database: database
}); */

export const databaseConnection = knex({
  client: "mysql2",
  connection: dataBaseDados,
});