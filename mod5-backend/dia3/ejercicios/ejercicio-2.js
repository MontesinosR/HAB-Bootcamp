/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama a la ruta `/curso`, devuelve status `200` con el body:
 *
 *       {
 *          curso: 'backend'
 *       }
 *
 * - Cuando se llama a cualquier ruta distinta devuelve status `200 OK` con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 */

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  if (request.url === "/curso") {
    response.end(JSON.stringify({ curso: "backend" }));
  } else {
    response.end(JSON.stringify({ message: "Hello world!" }));
  }
});

server.listen(4000, () => {
  console.log("Server listening at http://localhost:4000");
});
