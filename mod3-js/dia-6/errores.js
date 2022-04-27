"use strict";

// Syntax

// function f1() {
// JSON.parse("{");

// Reference

// console.log(variable);

// Type

const num = 5;

// num.toUpperCase();

// Range

// console.log(num.toPrecision(101));

// GESTIÓN ERRORES CON TRY/CATCH

try {
  num.toUpperCase();

  console.log(variable);
} catch (error) {
  if (error.name === "TypeError") {
    console.error("No puedes cambiar un número a mayúsculas");
  } else if (error.name === "ReferenceError") {
    console.error("Estás referenciando una variable que no existe");
  }
}

const saludar = (nombre) => {
  try {
    if (typeof nombre !== "string") {
      throw new TypeError("Nombre debe de ser un texto");
    }

    return `Hola ${nombre}! :)`;
  } catch (error) {
    console.error(error.message);
  }
};

const suma = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("A y B deben de ser números");
    }

    return a + b;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

console.log(suma("5", 5));
