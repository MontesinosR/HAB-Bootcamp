/*
 * Inicia un servidor de express en el puerto 3000 que atienda estas peticiones:
 *
 * - GET - /cars: Deberá responder con un statusCode 200 y los coches en db/cars.json
 *
 * - POST - /cars: Deberá recoger el coche enviado en el body. Si en el body no recibimos
 * un coche que tenga al menos marca y modelo, responderemos con statusCode 400 y un mensaje
 * diciendo "Coche no válido". Si recibimos un coche válido, lo crearemos en coches.json
 * respondemos con statusCode 201 y el array completo de coches
 *
 * - Si se hace una petición a cualquier otra ruta, deberá responder con statusCode 404 y
 * sin body
 *
 */

const express = require("express");
const path = require("path");
const { writeFile } = require("fs").promises;
const cars = require("./db/cars.json");

const app = express();

app.use(express.json());

app.get("/cars", (req, res) => {
  res.status(200).send(cars);
});

app.post("/cars", async (req, res) => {
  try {
    const newCar = req.body;

    const brandAndModelExists = newCar.brand && newCar.model;

    if (!brandAndModelExists) {
      const error = new Error("Car must have brand and model");
      error.statusCode = 400;
      throw error;
    }

    cars.push(newCar);

    const carsJsonPath = path.join(__dirname, "db", "cars.json");

    await writeFile(carsJsonPath, JSON.stringify(cars));

    res.status(201).send(cars);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
