const mysql = require("mysql2/promise");

let pool;

const getPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: "localhost",
      port: 3306,
      user: "samudb",
      password: "Inazuma1234@",
      database: "pistas_zaragoza",
      timezone: "Z",
      connectionLimit: 10,
    });
  }

  return pool;
};

module.exports = getPool;
