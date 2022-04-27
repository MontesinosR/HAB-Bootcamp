"use strict";

const coches = [
  { marca: "Mazda", modelo: 3 },
  { marca: "Ford", modelo: "Focus" },
  { marca: "Seat", modelo: "Leon" },
];

const getCoche = (marca) => {
  const cocheEncontrado = coches.find((coche) => {
    return coche.marca === marca;
  });

  return cocheEncontrado;
};

console.log(getCoche("Peugeot"));
