/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Servidor web que escucha cualquier request en el puerto 4000, y devuelve siempre status
 * `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 */

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ curso: "backend" }));
});

server.listen(4000, () => {
  console.log("Server listening at http://localhost:4000");
});
