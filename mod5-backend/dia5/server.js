require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");

const registerUser = require("./controllers/users/registerUser");

const app = express();

/** Nos traemos el SERVER_PORT del process.env */
const { SERVER_PORT } = process.env;

/** Middlewares para poder leer bodys en formato JSON o multipart/form-data */
app.use(express.json());
app.use(fileUpload());

/** Hacemos la carpeta "uploads" estática. Esto hará que se puede acceder mediante una petición de tipo GET a cualquiera de sus ficheros */
app.use(express.static("uploads"));

/** Declaramos un endpoint que escucha peticiones con método POST a la url /users. Cuanto esto suceda, se ejecutará el controller registerUser */
app.post("/users", registerUser);

// app.post("/cars", async (req, res, next) => {
//   try {
//     const { brand, model } = req.body;

//     if (!(brand && model)) {
//       const error = new Error("Car brand and model are required");
//       error.statusCode = 400;
//       throw error;
//     }

//     errorAProposito;

//     res
//       .status(201)
//       .send({ status: "ok", message: "Coche registrado correctamente" });
//   } catch (err) {
//     next(err);
//   }
// });

/** Middleware de prueba utilizado en explicación en clase */
app.use((req, res, next) => {
  console.log("Middleware normal...");
});

/** Middleware de errores personalizado. Cuando hagamos un next(error), gestionaremos dicho error desde este middleware */
app.use((error, req, res, next) => {
  console.error(error);

  res.statusCode = error.statusCode || 500;
  res.send({ status: "error", message: error.message });
});

/** Iniciamos el servidor en el puerto declarado en el process.env */
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
