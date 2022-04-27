"use strict";

// const { readFile } = require("fs");
const { readFile } = require("fs").promises;

// UTILIZANDO LA VERSIÓN CON CALLBACKS

// readFile("../files/texto.txt", "utf-8", (err, datos) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     readFile(datos, "utf-8", (err, datos) => {
//       if (err) {
//         console.error(err.message);
//       } else {
//         readFile(datos, "utf-8", (err, datos) => {
//           if (err) {
//             console.error(err.message);
//           } else {
//             console.log(datos);
//           }
//         });
//       }
//     });
//   }
// });

// RESOLVIENDO PROMESAS CON ASYNC/AWAIT

const getFileData = async () => {
  try {
    const datosTextoTxt = await readFile("../files/texto.txt", "utf-8");

    const datosDosTxt = await readFile(datosTextoTxt, "utf-8");

    const datosTresTxt = await readFile(datosDosTxt, "utf-8");

    console.log(datosTresTxt);
  } catch (error) {
    console.error(error.message);
  }
};

getFileData();

// RESOLVIENDO PROMESAS CON THEN/CATCH

readFile("../files/texto.txt", "utf-8")
  .then((datosTextoTxt) => {
    readFile(datosTextoTxt, "utf-8")
      .then((datosDosTxt) => {
        readFile(datosDosTxt, "utf-8")
          .then((datosTresTxt) => {
            console.log(datosTresTxt);
          })
          .catch((errorTresTxt) => {
            console.error(errorTresTxt.message);
          });
      })
      .catch((errorDosTxt) => {
        console.error(errorDosTxt.message);
      });
  })
  .catch((errorTextoTxt) => {
    console.error(errorTextoTxt.message);
  });
