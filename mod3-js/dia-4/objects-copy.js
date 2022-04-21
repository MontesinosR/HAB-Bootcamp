"use strict";

const usuario = {
  nombre: "pepe",
  apellido: "gonzalez",
  direccion: {
    pais: "españa",
    provincia: "la coruña",
  },
};

// const copiaUsuario = usuario;

// usuario.nombre = "lucas";

// console.log(usuario, copiaUsuario);

// COPIAS POCO PROFUNDAS

const copiaUsuario = {
  ...usuario,
  direccion: { ...usuario.direccion },
};

usuario.nombre = "lucas";

usuario.direccion.pais = "francia";

console.log(usuario, copiaUsuario);

// COPIAS PROFUNDAS

// const usuarioJSON = JSON.stringify(usuario);

// const copiaProfundaUsuario = JSON.parse(usuarioJSON);

const copiaProfundaUsuario = JSON.parse(JSON.stringify(usuario));

console.log(copiaProfundaUsuario);
