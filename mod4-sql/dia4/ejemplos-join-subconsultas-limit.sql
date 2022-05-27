USE pistas_zaragoza;

-- Seleccionar las reservas, con la información del usuario que reservó, de la pista y del polideportivo
SELECT r.*, u.nombre, u.telefono, u.email, p.tipo_pista, p.id_polideportivo, po.nombre, po.direccion, po.extension FROM reservas r INNER JOIN usuarios u ON r.dni_usuario = u.dni INNER JOIN pistas p ON r.codigo_pista = p.codigo INNER JOIN polideportivos po ON p.id_polideportivo = po.id WHERE r.precio > 18;

-- Seleccionar toda la información de la pista más barata
INSERT INTO reservas (fecha_uso, precio, dni_usuario, codigo_pista) VALUES ("2022-05-23 16:00:00", 12, "99888645F", 89273);

SELECT * FROM reservas WHERE precio = (SELECT MIN(precio) FROM reservas);

-- Seleccionar la pista más barata
SELECT * FROM reservas ORDER BY precio LIMIT 1;
