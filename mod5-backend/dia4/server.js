const express = require("express");
const morgan = require("morgan");

const app = express();

// Esto sería un logger hecho por nosotros. Morgan lo hace mucho mejor que nosotros así que lo comentamos
// app.use((request, response, next) => {
//   const { method, url } = request;

//   console.log(`${method} - ${url}`);

//   next();
// });

app.use(express.json());
app.use(morgan("dev"));

app.get("/users", (request, response) => {
  /*
   * res.end() - Completamente manual. Tenemos que indicar nosotros el Content-Type

   * res.send() - Pone el Content-Type automáticamente. Si mandamos un objeto o un array,
   * lo convierte automáticamente a JSON
   * 
   * res.json() - Igual que res.send(), pero convierte cualquier cosa que enviemos a
   * JSON (aunque sea texto html o cualquier otra cosa)
   */

  //   response.setHeader("Content-Type", "text/html");
  //   response.end("<h1>Users</h1>");

  response.send("<h1>Users</h1>");
});

app.post("/users", (request, response) => {
  console.log(request.body);

  response.statusCode = 200;
  response.send(request.body);
});

app.get("/data", (request, response) => {
  response.end();
});

// Middleware 404
app.use((request, response) => {
  response.statusCode = 404;
  response.end();
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
