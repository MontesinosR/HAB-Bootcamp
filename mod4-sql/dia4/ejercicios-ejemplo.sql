USE ejemplo;

ALTER TABLE ejemplo.departamentos MODIFY COLUMN presu decimal(5,3);

-- 1. Para cada departamento con presupuesto inferior a 35.000 €, hallar le nombre del Centro donde está ubicado y el máximo salario de sus empleados (si dicho máximo excede de 1.500 €). Clasificar alfabéticamente por nombre de departamento.
SELECT d.*, c.nomce, MAX(e.salar) salario_maximo FROM departamentos d INNER JOIN centros c ON d.numce = c.numce LEFT JOIN empleados e ON d.numde = e.numde WHERE d.presu < 35.000 GROUP BY d.numde HAVING salario_maximo > 1800 ORDER BY d.nomde;

-- 2. Hallar por orden alfabético los nombres de los departamentos que dependen de los que tienen un presupuesto inferior a 30.000 €. También queremos conocer el nombre del departamento del que dependen y su presupuesto.
SELECT de.nomde, dd.nomde depende_de, dd.presu depende_presu FROM departamentos de INNER JOIN departamentos dd ON de.depde = dd.numde WHERE dd.presu < 30.000 ORDER BY de.nomde;