const { v4: uuidv4 } = require("uuid");
const path = require("path");
const sharp = require("sharp");

const uploadImage = async (imageBuffer) => {
  /** Procesamos el Buffer de la imagen con sharp. Esto nos retornará un objeto que contiene métodos para realizar modificaciones en la imagen u obtener información de esta */
  const sharpImage = sharp(imageBuffer);

  /** Llamamos al método metadata() para obtener información sobre la imagen como el width */
  const imageMetadata = await sharpImage.metadata();

  /** Si el width es mayor que 1000px, hacemos un resize a dicho tamaño */
  if (imageMetadata.width > 1000) {
    sharpImage.resize(1000);
  }

  /** Construimos el nombre de la imagen que vamos a subir, generando un uuid y añadiendo el formato */
  const imageName = `${uuidv4()}.${imageMetadata.format}`;

  /** Construios el path donde vamos a subir la imagen */
  const imagePath = path.join(__dirname, "..", "uploads", imageName);

  /** La subimos con el método toFile */
  await sharpImage.toFile(imagePath);

  return imageName;
};

module.exports = uploadImage;
