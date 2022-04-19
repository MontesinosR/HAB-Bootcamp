"use strict";

const a = +prompt("Introduce A:");
// const b = +prompt("Introduce B:");

// if (a < b) {
//   console.log(`${a} es menor que ${b}`);
// } else if (a > b) {
//   console.log(`${a} es mayor que ${b}`);
// } else if (a === b) {
//   console.log(`${a} es igual que ${b}`);
// }

if (a > 0 && a < 4) {
  console.log("A es mayor que cero");
} else if (a > 3 && a < 7) {
  console.log("A es mayor que tres");
} else if (a > 6) {
  console.log("A es mayor que seis");
} else {
  console.log("A es un número negativo o cero");
}

// if (a > 0) {
//   if (a > 3) {
//     if (a > 6) {
//       console.log("A es mayor que seis");
//     } else {
//       console.log("A es mayor que tres");
//     }
//   } else {
//     console.log("A es mayor que cero");
//   }
// } else {
//   console.log("A es cero o negativo");
// }

// if (a === 5) {
//   console.log("A es igual que cinco");
// }

// if (a) {
//   console.log("El usuario escribió algo");
// } else {
//   console.log("El usuario no escribió nada");
// }
