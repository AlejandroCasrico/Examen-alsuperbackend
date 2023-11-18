CREATE DEFINER=`root`@`localhost` PROCEDURE `bajaAutor`(
IN p_id INT
)
BEGIN
DELETE FROM autores WHERE id = p_id;
END