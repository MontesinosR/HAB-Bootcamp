/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama al *endpoint* `/curso`, devuelve status `200 OK` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 * - Cuando se llama al *endpoint* `/message`, devuelve status `200 OK` con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 * - Cuando se llama a cualquier otro *endpoint*, devuelve status `404 NOT FOUND` con el body.
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 *
 */

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  const { url } = request;

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  if (url === "/curso") {
    response.end(JSON.stringify({ curso: "backend" }));
  } else if (url === "/message") {
    response.end(JSON.stringify({ message: "Hello world!" }));
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({ message: "No lo encuentro" }));
  }
});

server.listen(4000, () => {
  console.log("Server listening at http://localhost:4000");
});
