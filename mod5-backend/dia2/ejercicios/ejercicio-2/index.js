/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, escribe una función que acepte como argumentos
 * dos strings. El primer argumento representará el nombre del archivo (que deberá
 * estar ubicado en el mismo directorio que "index.js") y el segundo un contenido
 * a escribir en el archivo.
 *
 * Llama a esta función para escribir un fichero "file.txt" en el directorio actual
 * con el contenido "¡Hola Backend!".
 *
 */

const { writeFile } = require("fs").promises;
const path = require("path");

const createFile = async (fileName, content) => {
  try {
    const filePath = path.join(__dirname, fileName);

    await writeFile(filePath, content);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("File does not exist");
    } else {
      console.error(error.message);
    }
  }
};

const [fileName, content] = process.argv.slice(2);

createFile(fileName, content);
