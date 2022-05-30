const { v4: uuidv4 } = require("uuid");
const path = require("path");

const uploadFile = async (file) => {
  /** Guardamos la extensión del fichero con path.extname() */
  const fileExt = path.extname(file.name);

  /** Generamos el nombre del fichero que vamos a subir */
  const fileName = `${uuidv4()}.${fileExt}`;

  /** Guardamos el path completo donde vamos a subirlo */
  const filePath = path.join(__dirname, "..", "uploads", fileName);

  /** Subimos el fichero en dicho path */
  await file.mv(filePath);

  /** Retornamos el nombre del fichero subido */
  return fileName;
};

module.exports = uploadFile;
