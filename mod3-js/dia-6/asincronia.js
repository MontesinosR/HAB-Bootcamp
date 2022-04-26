"use strict";
// Hacer una función que reciba dos parámetros, delaySeconds y durationSeconds. Una vez pasen los delay seconds, se iniciará un cronómetro durante los durationSeconds
// EJ: Después de 5 segundos (delaySeconds), va a iniciarse un cronómetro hasta 10 segundos (durationSeconds)
const iniciarHornillo = (durationSeconds) => {
  console.log("Empezando a calentar el colacao");
  let seconds = 0;
  const intervalID = setInterval(() => {
    console.log(++seconds);
    if (seconds === durationSeconds) {
      clearInterval(intervalID);
      console.log("Colacao listo! :D");
    }
  }, 1000);
};
const prepararHornillo = (delaySeconds, durationSeconds) => {
  console.log(
    `El colacao se va a empezar a calentar dentro de ${delaySeconds} segundos`
  );
  setTimeout(() => {
    iniciarHornillo(durationSeconds);
  }, delaySeconds * 1000);
};
prepararHornillo(5, 10);
