process.on("exit", () => {
  console.log("Programa finalizando...");
});

process.on("uncaughtException", () => {
  console.log("Error sin gestionar...");
});

try {
  a;
} catch (err) {
  console.error(err.message);
}

b;
