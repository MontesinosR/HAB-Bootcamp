/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Servidor express que gestiona objetos del tipo:
 *
 *      {
 *          email: 'pepito@gmail.com',
 *          message: 'Hola soy Pepito',
 *      }
 *
 * - Internamente usará un fichero `users.json` donde se almacenarán datos. Este archivo
 *   se sitúa en el directorio `/database` dentro de la raiz del servidor.
 *
 * - Cuando la request es un `GET` a `/api/users`, se sirven al cliente con todos los datos
 *   que hay en "users.json"
 *
 * - Cuando la request es un `POST` a `/api/users`, se incluye el objeto recibido en el "users.json", y se responde al cliente con todos los datos que hay en dicho fichero
 *
 * - Cuando es otra request cualquiera, se responde `404 NOT FOUND` sin body.
 *
 *
 * EXTRA: Utilizar el módulo dotenv, para guardar el puerto del servidor y la carpeta
 * donde guardamos los datos (database) como variables de entorno
 *
 */

require("dotenv").config();
const express = require("express");
const path = require("path");
const { writeFile } = require("fs").promises;

const { SERVER_PORT, DATABASE_DIR } = process.env;

const users = require(`../${DATABASE_DIR}/users.json`);

const app = express();

app.use(express.json());

app.get("/api/users", (request, response) => {
  response.statusCode = 200;
  response.send(users);
});

app.post("/api/users", async (request, response) => {
  users.push(request.body);

  const usersJSONPath = path.join(__dirname, "..", DATABASE_DIR, "users.json");

  await writeFile(usersJSONPath, JSON.stringify(users));

  response.statusCode = 200;
  response.send(users);
});

app.use((request, response) => {
  response.statusCode = 404;
  response.end();
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
