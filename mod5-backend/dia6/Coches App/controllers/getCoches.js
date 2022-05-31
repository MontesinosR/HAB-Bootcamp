const getPool = require("../database/getPool");

const getCoches = async (req, res, next) => {
  try {
    const pool = getPool();

    const [coches] = await pool.query("SELECT * FROM coches");

    res.status(200).send({ status: "ok", data: coches });
  } catch (error) {
    next(error);
  }
};

module.exports = getCoches;
