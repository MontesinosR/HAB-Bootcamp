require("dotenv").config();
const express = require("express");

const getBookings = require("./controllers/bookings/getBookings");
const getBookingById = require("./controllers/bookings/getBookingById");

const app = express();

const { SERVER_PORT } = process.env;

app.get("/bookings", getBookings);

app.get("/bookings/:bookingId", getBookingById);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
