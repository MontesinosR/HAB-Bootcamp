const mysql = require("mysql2/promise");

let pool;

const getPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "005114",
      database: "coches",
      timezone: "Z",
      connectionLimit: 10,
    });
  }

  return pool;
};

module.exports = getPool;
