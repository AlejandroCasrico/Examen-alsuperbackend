CREATE DEFINER=`root`@`localhost` PROCEDURE `Altalibro`(
    IN p_book VARCHAR(10),
    IN p_fecha_publicacion DATE,
    IN p_ventas INT,
    IN p_id_autor INT,
    OUT p_insertId INT
)
BEGIN
    INSERT INTO libros (book, fecha_publicacion, ventas, id_autor) 
    VALUES (p_book, p_fecha_publicacion, p_ventas, p_id_autor);
    SET p_insertId = LAST_INSERT_ID();
END