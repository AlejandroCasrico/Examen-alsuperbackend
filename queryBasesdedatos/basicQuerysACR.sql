create database IF NOT EXISTS TrabajoExamen;
use TrabajoExamen;
#selects
select * from usuarios;
select * from autores;
select*from libros;
#creates
create table usuarios (
	id int primary key auto_increment,
	nameUser varchar(10),
    age int,
    job varchar(50)
);

create table autores (
	id int primary key auto_increment,
	autor varchar(10),
    age int,
	city varchar(50)
);


create table libros (
	id int primary key auto_increment,
	book varchar(10) not null,
    fecha_publicacion date not null,
	ventas int not null,
    id_autor int not null,
    foreign key (id_autor) references autores (id)
);
#inserts
insert into usuarios (nameUser,age,job) values ('Alejandro','22','Back developer'),
('Samuel','32','Cloud engineer'),('Hector','42','UX/UI');
  insert into autores (autor,age,city) values ('John Lucas','66','NY city'),
('Emmanuel','54','Chicago Illinois'),('Hector','66','Guanajuato');
insert into libros (book,fecha_publicacion,ventas,id_autor) values ('the war','2002-02-01',200,2),
('missery','2010-04-05',200,1),('the live','2000-05-01',500,1),('navy crime','2009-03-02',300,2),('the marci','2005-03-02',9000,3),
('hunger','2005-03-02',3000,1);
