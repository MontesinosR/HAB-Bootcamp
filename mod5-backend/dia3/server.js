const http = require("http");

const server = http.createServer();

/*
 *  GET: Solo pedir datos
 *  POST: Enviar datos
 *  PUT: Actualizar datos
 *  DELETE: Eliminar datos
 */

const users = require("./users.json");

server.on("request", (request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ status: "ok", data: users }));
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ status: "error", message: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
