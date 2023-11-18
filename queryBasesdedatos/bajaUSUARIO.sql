CREATE DEFINER=`root`@`localhost` PROCEDURE `bajaUsuario`(
	    IN p_id INT
)
BEGIN
	DELETE FROM usuarios WHERE id = p_id;
END