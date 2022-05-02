"use strict";

const tasksForm = document.forms.tasks;
const tasksList = document.querySelector("#tasksList");

tasksForm.addEventListener("submit", (event) => {
  // Cancelamos la acción por defecto del formulario
  event.preventDefault();

  // Seleccionamos el input descripción
  const descriptionInput = tasksForm.elements.description;

  // Creamos un li (tarea)
  const task = document.createElement("li");

  // Le damos un textContent con el valor del input descripción
  task.textContent = descriptionInput.value;

  // Metemos el li dentro de la ul
  tasksList.append(task);

  // Vacimos el input
  descriptionInput.value = "";
});
