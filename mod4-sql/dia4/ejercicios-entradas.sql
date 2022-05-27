-- Todo lo necesario para crear las tablas de la base de datos diatio_viajes en la carpeta "diario_viajes"

USE diario_viajes;

-- Seleccionar todos los datos de una entrada, junto al nombre y avatar del usuario que la creo y con su media de votos

SELECT e.*, u.name, u.avatar, IFNULL(AVG(v.vote), 0) votes_average FROM entries e INNER JOIN users u ON e.user_id = u.id LEFT JOIN entries_votes v ON e.id = v.entry_id GROUP BY e.id;

-- Seleccionar lo mismo que en el anterior, pero solo las entradas que tengan una media de votos superior a la media general

SELECT e.*, u.name, u.avatar, IFNULL(AVG(v.vote), 0) votes_average FROM entries e INNER JOIN users u ON e.user_id = u.id LEFT JOIN entries_votes v ON e.id = v.entry_id GROUP BY e.id HAVING votes_average > (SELECT AVG(vote) FROM entries_votes);