const { sumar } = require("./operaciones");

const [a, b] = process.argv.splice(2);

console.log(sumar(+a, +b));
