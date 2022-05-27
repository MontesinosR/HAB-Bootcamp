/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Servidor que se comporta igual que el del ejercicio 3, pero además imprime por pantalla
 * el *método* y la *URL* de cada request.
 *
 */

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  const { method, url } = request;

  console.log(`${method} - ${url}`);

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
