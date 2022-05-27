require("dotenv").config();

const { UPLOADS_DIR, AVATARS_DIR, DB_USER, DB_PASSWORD } = process.env;

console.log(UPLOADS_DIR, AVATARS_DIR);

console.log(
  `Accediendo a base de datos con el usuario ${DB_USER} y la password ${DB_PASSWORD}`
);
