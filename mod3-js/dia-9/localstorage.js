"use strict";

const tasks = ["tarea1", "tarea2", "tarea3"];

// AÑADIR DATOS

localStorage.setItem("theme", "dark");

localStorage.setItem("tasks", JSON.stringify(tasks));

// LEER DATOS

console.log(localStorage.getItem("theme"));
console.log(JSON.parse(localStorage.getItem("tasks")));

// ELIMINAR DATOS

localStorage.removeItem("tasks");
localStorage.clear();

// Session storage es igual, pero cambiando "localStorage", por "sessionStorage"

sessionStorage.setItem("theme", "dark");
