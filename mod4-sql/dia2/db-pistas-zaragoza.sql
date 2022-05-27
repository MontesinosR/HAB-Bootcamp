CREATE DATABASE IF NOT EXISTS pistas_zaragoza;

USE pistas_zaragoza;

-- TIPOS DE DATOS:
-- CHAR(n). Solo puede almacenar textos de entre 1 y 255 caracteres. n indica el número de caracteres exactos del texto
-- VARCHAR(n). Almacena textos de hasta 4000 caracteres. n indica el número de caracteres máximos del texto
-- TINYINT. Desde -128 hasta 127
-- SMALLINT. Desde -32768 hasta 32767
-- MEDIUMINT. Desde -8388608 hasta 8388607
-- INTEGER. Desde -2147483648 hasta 2147843647
-- BIGINT. Desde -9223372036854775808 hasta 9223372036854775807
-- DATE. Guarda una fecha YYYY-MM-DD
-- DATETIME. Guarda una fecha, pero también con la hora YYYY-MM-DD HH:MM:SS
-- TIMESTAMP. Guarda una marca de tiempo
-- DECIMAL(m, d). m es el número máximo de dígitos totales, y d es el número de decimales
-- ENUM(a, b, c). Podemos indicar los valores válidos para ese campo
-- BOOLEAN. True o false (0 o 1)


-- RESTRICCIONES (CONSTRAINTS)
-- PRIMARY KEY
-- FOREIGN KEY
-- UNSIGNED. Hace que los números solo puedan ser positivos y duplica en rango de número máximo y número mínimo
-- DEFAULT. Nos permite darle un valor por defecto a un campo
-- NOT NULL. El campo no puede estar vacío
-- CHECK. Permite escribir una condición que tiene que cumplir el campo
-- UNIQUE. Ese campo solo admite valores únicos


-- OTROS
-- AUTO_INCREMENT. Va generando números sumando de uno en uno
-- CURRENT_TIMESTAMP: Marca de tiempo en formato TIMESTAMP del momento en que se introduce el registro
-- NOW(): Me da la fecha en formato DATETIME del momento en que se introduce el registro

CREATE TABLE IF NOT EXISTS usuarios (
  dni CHAR(9) PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  tlf INT UNSIGNED,
  email VARCHAR(100) NOT NULL UNIQUE,
  fecha_nacimiento DATE
);

CREATE TABLE IF NOT EXISTS polideportivos (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  direccion VARCHAR(150) NOT NULL,
  extension SMALLINT UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS pistas (
  codigo INT UNSIGNED PRIMARY KEY,
  tipo_pista ENUM("futbol_sala", "baloncesto", "tenis", "padel", "voley") NOT NULL,
  estado BOOLEAN DEFAULT FALSE NOT NULL,
  ultima_reserva DATETIME,
  id_polideportivo INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_polideportivo) REFERENCES polideportivos (id)
 );

CREATE TABLE IF NOT EXISTS reservas (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_uso DATETIME NOT NULL,
  precio DECIMAL(4, 2) NOT NULL,
  dni_usuario CHAR(9) NOT NULL,
  codigo_pista INT UNSIGNED,
  FOREIGN KEY (dni_usuario) REFERENCES usuarios (dni),
  FOREIGN KEY (codigo_pista) REFERENCES pistas (codigo)
);

-- Esto me da error, ya que no puedo eliminar una tabla que está referenciada en otra
-- DROP TABLE pistas;

-- Esto elimina la base de datos entera
-- DROP DATABASE pistas_zaragoza;

-- ALTER TABLE. Modificar la definición de las tablas

ALTER TABLE usuarios ADD apellido VARCHAR(50);
ALTER TABLE usuarios CHANGE tlf telefono INT UNSIGNED NOT NULL;
ALTER TABLE usuarios DROP COLUMN fecha_nacimiento;

-- ESTO NO TENDRÍA SENTIDO (añadir un polideportivo a un usuario). Lo hago solo para el ejemplo de añadir una CONSTRAINT FOREIGN KEY a una tabla ya creada

-- ALTER TABLE usuarios ADD id_polideportivo INT UNSIGNED;

-- Añadir una nueva restricción (constraint)
-- ALTER TABLE usuarios ADD CONSTRAINT FK_usuario_polideportivo FOREIGN KEY (id_polideportivo) REFERENCES polideportivos(id);


-- INSERTAR DATOS EN LAS TABLAS

INSERT INTO usuarios (dni, nombre, telefono, email, apellido) VALUES ("99888777F", "Pepe", 657263748, "pepe@email.com", "González");
INSERT INTO polideportivos (nombre, direccion, extension) VALUES ("Sagrada Familia", "Ronda Outeiro", 700);
INSERT INTO pistas (codigo, tipo_pista, estado, id_polideportivo) VALUES (89273, "futbol_sala", 1, 1);
INSERT INTO reservas (fecha_uso, precio, dni_usuario, codigo_pista) VALUES ("2022-05-07 19:00:00", 20, "99888777F", 89273);