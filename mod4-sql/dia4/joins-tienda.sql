CREATE DATABASE tienda;

USE tienda;

CREATE TABLE usuarios (
   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(50)
);

CREATE TABLE pedidos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    precio_total INT,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE productos(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    precio INT
);

CREATE TABLE pedidos_productos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT UNSIGNED,
    id_producto INT UNSIGNED,
    FOREIGN KEY (id_pedido) REFERENCES pedidos (id),
    FOREIGN KEY (id_producto) REFERENCES productos (id)
);

ALTER TABLE productos ADD COLUMN nombre VARCHAR(50);

INSERT INTO usuarios (nombre) VALUES ("Pepe"), ("María"), ("Marcos"), ("Lucas");

INSERT INTO productos (precio, nombre) VALUES (5, "Palas de playa"), (300, "TV Samsung"), (185, "Xiaomi 7");

INSERT INTO pedidos (id_usuario) VALUES (1), (3);

INSERT INTO pedidos_productos (id_pedido, id_producto) VALUES (1, 1), (2, 2), (2, 3);

-- Inserto un pedido con id_usuario vacío, para simular pedidos que no están asignados a un usuario (y así ver la diferencia con los distintos tipos de JOIN)
INSERT INTO pedidos (id_usuario) VALUES (NULL);

SELECT u.*, p.id id_pedido, p.id_usuario, pp.id_producto FROM usuarios u LEFT JOIN pedidos p ON u.id = p.id_usuario INNER JOIN pedidos_productos pp ON p.id = pp.id_pedido;

-- usuarios LEFT JOIN pedidos me va a dar todos los usuarios sin pedidos, y los usuarios con pedidos, pero no los pedidos sin usuarios
-- usuarios INNER JOIN pedidos me va a dar solo los ususarios que tengan pedidos, pero no los que no tengan pedidos o los pedidos que no tengan usuario
-- usuarios RIGHT JOIN pedidos me va a dar los usuarios que tengan pedidos y los pedidos que no tengan usuario, pero no me va a dar los usuarios que no tengan pedidos
