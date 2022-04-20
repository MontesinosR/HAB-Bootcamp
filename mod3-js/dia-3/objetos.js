"use strict";

const name = "pepe";
const lastname = "rodriguez";
const birthYear = 1996;
const favColor = "blue";

// const usuario = ["pepe", "rodriguez", 1996, "blue"];

// CREACIÓN DE OBJETOS. Un objeto guarda pares de propiedades y valores

// new Object()

const usuario = {
  name: "pepe",
  lastname: "gonzalez",
  birthYear: 1996,
  favColor: "blue",
};

const coche = {
  marca: "maz" + "da",
  cv: 100 + 120,
};

console.log(coche);

// ACCEDER A VALORES DE OBJETOS

const loQueQuiereElUsuario = prompt(
  "¿Qué información del coche quieres? (marca, cv)"
);

console.log(usuario["name"]);

console.log(coche[loQueQuiereElUsuario]);

console.log(usuario.name);

// No funciona, porque busca directamente una propiedad "loQueQuiereElUsuario"
console.log(coche.loQueQuiereElUsuario);

// MODIFICAR Y AÑADIR VALORES A UN OBJETO

usuario.name = "marcos";

console.log(usuario);

usuario["name"] = "lucas";

console.log(usuario);

usuario.age = 30;

usuario["city"] = "La Coruña";

console.log(usuario);

const piso = {
  ubicacion: "La Coruña",
  precio: 200000,
  m2: 180,
  ubicacion: "Málaga",
};

console.log(piso);
