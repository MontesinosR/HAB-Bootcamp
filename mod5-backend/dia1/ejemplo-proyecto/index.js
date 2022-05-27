/*
 * Iniciar un proyecto de node (con npm). Instalar minimist. Crear una función que reciba tres parámetros: a, b y tipo de operación. Ejecutar la función, pasándole estos parámetros con minimist
 */

const calculator = require("./calculator");

const args = require("minimist")(process.argv.slice(2));

console.log(calculator(args));
