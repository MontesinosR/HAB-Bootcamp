const getPool = require("../../database/getPool");

const getBookings = async (req, res, next) => {
  try {
    const pool = getPool();

    const [bookings] = await pool.query("SELECT * FROM reservas");

    res.status(200).send({ status: "ok", data: bookings });
  } catch (error) {
    next(error);
  }
};

module.exports = getBookings;
