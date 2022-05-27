/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea una función en el módulo "simple-maths.js" que calcule el doble de un
 * número. Expórtala e impórtala en el "index.js".
 *
 * La función que importamos debe recibir un argumento de tipo numérico e imprimir por consola
 * el doble de dicho valor.
 *
 */

const double = require("./simple-maths");

const num = process.argv[2];

console.log(double(num));
