"use strict";

// DOCUMENT OBJECT MODEL

console.dir(document);

// SELECCIONAR NODOS

// Seleccionar un único nodo

// const section = document.querySelector("body > section");
const section = document.querySelector("#principal");

console.log(section);

const sectionPorId = document.getElementById("principal");

console.log(sectionPorId);

// Seleccionar varios nodos

const listaParrafos = document.querySelectorAll("p");

// El querySelectorAll nos devuelve una lista de Nodos. Si algún día necesitamos convertirla en un array, podemos usar Array.from(NodeList)
console.log(Array.from(listaParrafos));

const elementosClaseContent = document.getElementsByClassName("content");

console.log(elementosClaseContent);

const todosLosParrafos = document.getElementsByTagName("p");

console.log(todosLosParrafos);

// Estos métodos también existen en cada Nodo

const parrafosDentroDeSection = section.querySelectorAll("p");

console.log(parrafosDentroDeSection);

// MOVERNOS ENTRE NODOS

console.log(section.children);
console.log(section.firstElementChild);
console.log(section.lastElementChild);
console.log(section.nextElementSibling);
console.log(section.previousElementSibling);
console.log(section.parentElement);

// CUIDADO. Queremos trabajar siempre con elementos. Propiedades como firstChild, nos va a dar el primer nodo hijo, tenga el tipo que tenga
console.log(section.firstChild);

// LEER Y MODIFICAR CONTENIDO

console.log(section.firstElementChild.textContent);

section.firstElementChild.textContent = "Título de la seccion cambiado";

// innerText es más pesado computacionalmente, pero cuando el elemento tiene visibility: hidden,nos va a dar el texto vacío
// console.log(section.firstElementChild.innerText);

console.log(section.innerHTML);

const comentarioUsuario =
  '<img onload=\'function(){alert("Hey")}\' src="https://source.unsplash.com/random"></img>';

section.innerHTML = `
    <h2>Titulo con innerHTML</h2>
    <p>Párrafo con innerHTML</p>
    <p>${comentarioUsuario}</p>
`;
