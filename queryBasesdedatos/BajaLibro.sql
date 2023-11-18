CREATE DEFINER=`root`@`localhost` PROCEDURE `Bajalibro`(
	IN p_id INT
)
BEGIN
	DELETE FROM libros WHERE id = p_id;
END