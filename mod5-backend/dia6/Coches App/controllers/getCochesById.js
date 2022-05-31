const getPool = require("../database/getPool");

const getCochesById = async (req, res, next) => {
  try {
    const { cocheId } = req.params;

    const pool = getPool();

    const [[coche]] = await pool.query("SELECT * FROM coches WHERE id = ?", [
      cocheId,
    ]);

    if (!coche) {
      const error = new Error("Coche does not exist");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).send({ status: "ok", data: coche });
  } catch (error) {
    next(error);
  }
};

module.exports = getCochesById;
