require("dotenv").config();
const express = require("express");

const getCoches = require("./controllers/getCoches");
const getCochesById = require("./controllers/getCochesById");

const app = express();

const { SERVER_PORT } = process.env;

app.get("/coches", getCoches);

app.get("/coches/:cochesId", getCochesById);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
