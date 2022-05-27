Descripción de las tablas de las prácticas

Tabla: **CENTROS**
| Campo | Nulo | Tipo de datos | Observaciones |
| -- | -- | -- | -- |
| NUMCE | NOT NULL | DECIMAL(4) | Número de centro |
| NOMCE |   | VARCHAR(25) | Nombre de centro
| DIRCE |   | VARCHAR(25) | Dirección del centro

Tabla: **DEPARTAMENTOS** 
| Campo | Nulo | Tipo de datos | Observaciones  |
| -- | -- | -- | -- |
| NUMDE | NOT NULL | DECIMAL(3) | Número de departamento  |
| NUMCE |   | DECIMAL(4) | Número de centro  |
| DIREC |   | DECIMAL(3) | Director  |
| TIDIR |   | CHAR(1) | Tipo de director (en Propiedad, en Funciones)  |
| PRESU |   | DECIMAL(3,1) | Presupuesto en miles de €  |
| DEPDE |   | DECIMAL(3) | Departamento del que depende  |
| NOMDE |   | VARCHAR(20) | Nombre de departamento  |

Tabla: **EMPLEADOS** 
| Campo | Nulo | Tipo de datos | Observaciones  |
| -- | -- | -- | -- |
| NUMEM | NOT NULL | DECIMAL(3) | Número de empleado  |
| EXTEL |   | DECIMAL(3) | Extensión telefónica  |
| FECNA |   | DATE | Fecha de nacimiento  |
| FECIN |   | DATE | Fecha de incorporación  |
| SALAR |   | DECIMAL(7,2) | Salario  |
| COMIS |   | DECIMAL(7,2) | Comisión  |
| NUMHI |   | DECIMAL(1) | Número de hijos  |
| NOMEM |   | VARCHAR(10) | Nombre de empleado  |
| NUMDE |   | DECIMAL(3) | Número de departamento  |
