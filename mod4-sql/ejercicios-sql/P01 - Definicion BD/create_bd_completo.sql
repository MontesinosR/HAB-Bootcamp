-- run as demo user: mysql -u demo -ppassword < create_bd_completo.sql

create schema if not exists ejemplo;
use ejemplo;

drop table if exists EMPLEADOS;
drop table if exists DEPARTAMENTOS;
drop table if exists CENTROS;

drop table if exists empleados;
drop table if exists departamentos;
drop table if exists centros;

create table centros(
  numce decimal(4) not null,
  nomce varchar(25) not null unique,
  dirce varchar(25),
  constraint pk_centros primary key(numce)
);

-- fijaos que no creo la restricción de clave foránea para la relación reflexiva,
-- para así evitar que sea necesario un orden concreto de inserción de datos
create table departamentos(
  numde decimal(3) not null,
  numce decimal(4),
  direc decimal(3),
  tidir char(1),
  presu decimal(3,1),
  depde decimal(3),
  nomde varchar(20),
  constraint pk_departamentos primary key(numde),
  constraint fk1_departamentos foreign key(numce)
    references centros(numce)
    on delete cascade
);

-- no puedo definir la foránea reflexiva porque
-- no puedo hacer referencia a una tabla que
-- no existe. la creo ahora con un alter table

/*ahora introduzco la clave foránea*/

alter table departamentos
add constraint fk2_departamentos
foreign key(depde)
references departamentos(numde);


create table empleados(
  numem decimal(3) not null,
  extel decimal(3),
  fecna date,
  fecin date,
  salar decimal(7,2),
  comis decimal(7,2),
  numhi decimal(1),
  nomem varchar(30),
  numde decimal(3),
  constraint pk_empleados primary key(numem),
  constraint fk1_empleados foreign key(numde)
    references departamentos(numde)
    on delete cascade
);



