const getPool = require("../../database/getPool");

const insertUser = async (email, password, avatarName, cvName) => {
  /** Nos tramos el pool */
  const pool = getPool();

  // const [{ insertId }] = await pool.query(
  //   `INSERT INTO users (email, password, avatar, cv) VALUES ("${email}", "${password}", "${avatarName}", "${cvName}")`
  // );

  /** Realizamos una query donde insertamos un nuevo usuario con los datos recibidos por parámetro */
  const [{ insertId }] = await pool.query(
    "INSERT INTO users (email, password, avatar, cv) VALUES (?, ?, ?, ?)",
    [email, password, avatarName, cvName]
  );

  /** Retornamos el id del nuevo usuario creado */
  return insertId;
};

module.exports = insertUser;
