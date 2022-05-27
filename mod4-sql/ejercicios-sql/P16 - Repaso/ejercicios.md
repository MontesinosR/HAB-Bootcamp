1. Selecciona, por orden alfabético decreciente, el nombre de los empleados junto con su salario aumentado un 1%, para aquellos empleados del departamento 100 que en la fecha de su contratación tenían más de 20 años.
```
NOMEM                          SALAR+0.01*SALAR
------------------------------ ----------------
PILAR                                    1929,1
ANTONIO                                   727,2
ADRIANA                                    2727
```
2. Para cada Centro selecciona el presupuesto medio de los departamentos que tienen su sede en él.
```
     NUMCE AVG(PRESU)
---------- ----------
        20         70
        10         30
```
3. Selecciona el nombre de los empleados junto con su edad actual para aquellos empleados que trabajan en el departamento de PERSONAL.
```
NOMEM   EDAD
------------------------------ ----------
CESAR     46
JULIO     44
JULIANA   44
FABIOLA   39
```
4. Selecciona la dirección del centro donde están ubicados los departamentos que tiene empleados con más de tres hijos. Deberás mostrar también el nombre de dichos departamentos.
```
DIRCE                          NOMDE
------------------------------ ------------------------------
C/ ATOCHA, 820, MADRID         DIRECCIÓN GENERAL
C/ ATOCHA, 820, MADRID         PERSONAL
C/ ATOCHA, 820, MADRID         FINANZAS
```
5. Selecciona la dirección del centro donde están ubicados los departamentos si existe alguno que tiene empleados con más de tres hijos. Deberás mostrar también el nombre de dichos departamentos.
```DIRCE                          NOMDE
------------------------------ ------------------------------
C/ ATOCHA, 405, MADRID         DIRECC.COMERCIAL
C/ ATOCHA, 820, MADRID         DIRECCIÓN GENERAL
C/ ATOCHA, 405, MADRID         SECTOR SERVICIOS
C/ ATOCHA, 820, MADRID         ORGANIZACIÓN
C/ ATOCHA, 820, MADRID         PROCESO DE DATOS
C/ ATOCHA, 820, MADRID         PERSONAL
C/ ATOCHA, 820, MADRID         FINANZAS
C/ ATOCHA, 405, MADRID         SECTOR INDUSTRIAL
```
6. Cuenta el número de empleados que tienen el mismo número de hijos. Deberás mostrar también el número de hijos que corresponde en cada caso.
```     NUMHI NºEmpleados
---------- -----------
         1           7
         6           1
         2           6
         4           1
         5           1
         3           4
         0          14
```
7. Crea una vista llamada “Sin comisión” donde muestres el nombre, la edad y el salario de los empleados que no tienen comisión. El salario deberá aparecer en la consulta seguido de “€” y el nombre del campo en el que aparezca la edad será “Edad actual”.
```
NOMEM              EDADACTUAL SALARIO
------------------ ---------- ---------------
CESAR                      46 1800 €
JULIO                      44 2600 €
JULIANA                    44 1750 €
PILAR                      46 1910 €
ADRIANA                    40 2700 €
ANTONIO                    43 720 €
DOROTEA                    39 1500 €
OTILIA                     37 1910 €
GLORIA                     49 1790 €
AUGUSTO                    40 1950 €
CORNELIO                   39 2400 €
AURELIO                    37 2700 €
FABIOLA                    39 1860 €
MICAELA                    39 1100 €
CARMEN                     41 1290 €
LUCRECIA                   37 1150 €
AZUCENA                    48 1010 €
CLAUDIA                    50 2400 €
VALERIANA                  49 1260 €
ROMULO                     50 1200 €
```
8. Utiliza la vista anterior para calcular el salario medio de los empleados que no tienen comisión.
```
MEDIASALARIOS
-------------
         1750
```
9. Selecciona el nombre de los departamentos en los que trabajan empleados cuyo salario máximo no supere los 2000 €.
```
NOMDE                          MAX(SALAR)
------------------------------ ----------
ORGANIZACIÓN                         1790
SECTOR SERVICIOS                     1910
SECTOR INDUSTRIAL                    1800
```
10. Crea una vista con el nombre “Jubilación” donde muestres el nombre de cada empleado, el nombre del departamento en el que trabajan, su edad y su salario para aquellos cuya edad sea, al menos, de 60 años.
Utiliza la vista anterior para mostrar el nombre de los empleados que tienen justo 60 años.
```
-- no rows selected
```
11. Muestra la dirección de los centros, el nombre de los empleados que trabajan en él, el nombre del departamento concreto en el que trabajan y quien es el director de dicho departamento para aquellos empleados cuyo nombre comience por la letra “J”.
```
DIRCE                          NOMEM                NOMDE  DIREC
------------------------------ -------------------- ------------------------------ ----------
C/ ATOCHA, 820, MADRID         JULIANA              PERSONAL 150
C/ ATOCHA, 820, MADRID         JULIO                PERSONAL 150
```