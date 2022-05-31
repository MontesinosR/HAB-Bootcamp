const getPool = require("../../database/getPool");

const getBookingById = async (req, res, next) => {
  try {
    const { bookingId } = req.params;

    const pool = getPool();

    const [[reserva]] = await pool.query(
      "SELECT * FROM reservas WHERE id = ?",
      [bookingId]
    );

    if (!reserva) {
      const error = new Error("Booking does not exist");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).send({ status: "ok", data: reserva });
  } catch (error) {
    next(error);
  }
};

module.exports = getBookingById;
