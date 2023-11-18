
Select l.book
from autores a inner join libros l
on a.id = l.id_autor where a.id = 1
group by a.autor, l.book;

Select a.autor, COUNT(l.id) as numero_de_libros
from autores a inner join libros l
on a.id = l.id_autor
group by a.autor
order by numero_de_libros asc;