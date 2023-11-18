CREATE DEFINER=`root`@`localhost` PROCEDURE `Libros_autor`(
IN p_id INT
)
BEGIN
Select l.book
from autores a inner join libros l
on a.id = l.id_autor where a.id = p_id
group by a.autor, l.book;
END