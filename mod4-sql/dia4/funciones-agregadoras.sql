USE pistas_zaragoza;

-- FUNCIONES AGREGADORAS
SELECT AVG(precio) precio_medio FROM reservas;
SELECT MIN(precio) precio_minimo FROM reservas;
SELECT MAX(precio) precio_maximo FROM reservas;
SELECT SUM(precio) precio_total FROM reservas;
SELECT COUNT(*) FROM reservas;