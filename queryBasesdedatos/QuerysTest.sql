CALL Libros_autor(3);
Call autores_libros();
Call AltaUsuario('mikee',22,'Redes',@insertId);
Call altaAutor('mikee',22,'Noruega',@insertId);
Call Altalibro('the jac','2002-12-01',200,2,@insertId);
select * from usuarios;
select * from autores;
select * from libros;
Call bajaUsuario(36);
