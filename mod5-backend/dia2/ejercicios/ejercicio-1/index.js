/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, muestra por pantalla el contenido de file.txt.
 * Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.
 *
 * Pista: el contenido se lee como un Buffer de datos, usa UTF-8 para leerlo.
 *
 */

const { readFile } = require("fs").promises;
const path = require("path");

const fileTxtPath = path.join(__dirname, "file.txt");

readFile(fileTxtPath, "utf-8")
  .then((readContent) => {
    console.log(readContent);
  })
  .catch((error) => {
    if (error.code === "ENOENT") {
      console.error("File does not exist");
    } else {
      console.error(error.message);
    }
  });
