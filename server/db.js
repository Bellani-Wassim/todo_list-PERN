const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
});
module.exports =pool;