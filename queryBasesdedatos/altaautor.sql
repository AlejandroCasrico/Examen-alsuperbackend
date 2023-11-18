CREATE DEFINER=`root`@`localhost` PROCEDURE `altaAutor`(
	IN p_autor VARCHAR(10),
    IN p_age INT,
    IN p_city VARCHAR(50),
	OUT p_insertId INT
)
BEGIN
	  INSERT INTO autores (autor, age, city) VALUES (p_autor, p_age, p_city);
         SET p_insertId = LAST_INSERT_ID();
END