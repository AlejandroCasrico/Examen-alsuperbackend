CREATE DEFINER=`root`@`localhost` PROCEDURE `AltaUsuario`(
	IN p_nameUser VARCHAR(10),
    IN p_age INT,
    IN p_job VARCHAR(50),
	 OUT p_insertId INT
)
BEGIN
	 INSERT INTO usuarios (nameUser, age, job) VALUES (p_nameUser, p_age, p_job);
     SET p_insertId = LAST_INSERT_ID();
END