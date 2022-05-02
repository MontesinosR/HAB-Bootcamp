"use strict";

// const loginForm = document.querySelector("form");
const loginForm = document.forms.login;

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Primer método. Accedemos a la propiedad elements del formulario, que es un array que va a tener los inputs y botones del formulario, guardados en una propiedad con su id. Una vez accedemos al input deseado, cogemos su valor con .value

  //   const emailValue = loginForm.elements.email.value;
  //   const passwordValue = loginForm.elements.password.value;

  //   console.log(emailValue, passwordValue);

  // Segundo método. Creamos un FormData y le pasamos el loginForm. Esto crea un objeto FormData con los valores de los inputs del formulario. La propiedad de cada valor va a ser el name del input. Por ejemplo, si el name del input es "email" - email: "pepe@email.com". Para recoger los valores, llamamos al método get del FormData y ponemos la propiedad que queremos

  //   const formData = new FormData(loginForm);

  //   const emailValue = formData.get("email");
  //   const passwordValue = formData.get("password");

  // Tercer método. Creamos un FormData igual que en el segundo método, pero lo "convertimos" en un objeto normal

  const formValues = Object.fromEntries(new FormData(loginForm));

  console.log(formValues);
});

// Eventos de los inputs: focus, blur, change, input

const emailInput = document.querySelector("#email");

emailInput.addEventListener("focus", () => {
  console.log("FOCUS");
});

emailInput.addEventListener("blur", () => {
  console.log("BLUR");
});

emailInput.addEventListener("change", () => {
  console.log("CHANGE");
});

emailInput.addEventListener("input", () => {
  console.log("INPUT");
});
