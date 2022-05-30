require("dotenv").config();
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    await pool.query(`DROP TABLE IF EXISTS users;`);

    console.log("Creando tabla users...");

    await pool.query(`
        CREATE TABLE users (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(100) NOT NULL UNIQUE,
          password VARCHAR(300) NOT NULL,
          avatar VARCHAR(300) NOT NULL,
          cv VARCHAR(300)
        );
        `);

    console.log("¡Tabla creada!");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

initDB();
