"use strict";

// SET TIMEOUT

// 1er parámetro: callback
// 2ndo parámetro: ms que tarda en ejecutarse
// setTimeout(() => {
//   console.log("hola");
// }, 2000);

// SET INTERVAL

const intervalID = setInterval(() => {
  console.log("hola");

  //   clearInterval(intervalID);
}, 2000);

clearInterval(intervalID);

// EJEMPLO CRONÓMETRO

const startTimer = (duration) => {
  let seconds = 0;

  const intervalID = setInterval(() => {
    console.log(++seconds);

    if (seconds === duration) {
      clearInterval(intervalID);
    }
  }, 1000);
};

startTimer(8);
