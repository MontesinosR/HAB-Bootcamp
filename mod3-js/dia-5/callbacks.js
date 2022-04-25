"use strict";

// function saludar(nombre) {
//   return `Hola ${nombre}!`;
// }

const saludar = (nombre) => {
  console.log(`Hola ${nombre}!`);
};

// console.log(saludar("Pepe"));

// const saludo = saludar("Pepe");

// console.log(saludar);

// ejecutarCincoVeces(function (nombre) {
//   console.log(`Hola ${nombre}`);
// });

// ejecutarCincoVeces((nombre) => {
//   console.log(`Hola ${nombre}!`);
// });

const ejecutarCincoVeces = (callbackFunction) => {
  console.log(callbackFunction);

  for (let i = 1; i <= 5; i++) {
    callbackFunction(i, 2);
  }
};

const suma = (a, b) => {
  console.log(a + b);
};

ejecutarCincoVeces(suma);

ejecutarCincoVeces(() => {
  console.log("Hey");
});

ejecutarCincoVeces(() => {
  console.log("Tercer callback");
});
