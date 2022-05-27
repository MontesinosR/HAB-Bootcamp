const prompt = require("prompt-sync")({ sigint: true });
const { nombre } = require("minimist")(process.argv.slice(2));

if (nombre) {
  console.log(`Hola ${nombre}! :D`);
} else {
  console.log("Hola! :D");
}

const preguntarEstadoAnimo = () => {
  const respuesta = prompt("¿Qué tal estás?");

  switch (respuesta.toLowerCase()) {
    case "bien":
      console.log("¡Me alegro! Ojala sigas teniendo un día maravilloso :)");
      break;
    case "mal":
      console.log("Bueno... habrá días mejores ;)");
      break;
    default:
      console.log("Lo siento, no te he entendido");
      preguntarEstadoAnimo();
  }
};

preguntarEstadoAnimo();
