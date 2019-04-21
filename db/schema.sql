-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(45) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)

);

--still need to push database into my sql