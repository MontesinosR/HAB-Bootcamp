/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Servidor web que escucha cualquier request.
 *
 * - Cuando la request es un `POST` a `/data`, se devuelve el *JSON* recibido.
 *
 * - Cuando es otra request cualquiera, se responde con código `404` sin body.
 *
 *
 * EXTRA: Además de devolver el JSON recibido, crear en una carpeta "database" un fichero "data.json" en el que vayamos metiendo los JSON que recibimos mientras el servidor está abierto
 */

const http = require("http");
const path = require("path");
const { writeFile } = require("fs").promises;
const bodyParser = require("../bodyParser");

const server = http.createServer();

const allData = [];

server.on("request", async (request, response) => {
  try {
    const { method, url } = request;

    if (method === "POST" && url === "/data") {
      const data = await bodyParser(request);

      allData.push(data);

      const dataJSONPath = path.join(__dirname, "database", "data.json");

      await writeFile(dataJSONPath, JSON.stringify(allData));

      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(data));
    } else {
      response.statusCode = 404;
      response.end();
    }
  } catch (error) {
    console.error(error.message);
    response.statusCode = 500;
    response.end();
  }
});

server.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
