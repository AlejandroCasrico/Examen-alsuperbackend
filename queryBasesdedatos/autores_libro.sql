CREATE DEFINER=`root`@`localhost` PROCEDURE `autores_libros`()
BEGIN
Select a.autor, COUNT(l.id) as numero_de_libros
from autores a inner join libros l
on a.id = l.id_autor
group by a.autor
order by numero_de_libros asc;
END