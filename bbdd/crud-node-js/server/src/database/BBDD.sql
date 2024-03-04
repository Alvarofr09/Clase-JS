-- Active: 1709567957641@@127.0.0.1@3306CREATE DATABASE students;
CREATE DATABASE releevant;

USE releevant;

CREATE TABLE students (
    ID INTEGER PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(255) NOT NULL,
    LAST_NAME VARCHAR(255) NOT NULL,
    AGE INTEGER NOT NULL,
    GENDER VARCHAR(255) NOT NULL
);

INSERT INTO students (NAME, LAST_NAME, AGE, GENDER) VALUES 
('Alvaro', 'Frias Ruiz', 20, 'Masculino'),
('Juan', 'Gonzalez', 20, 'Masculino'),
('Manoli', 'Pedrosa', 40, 'Femenino')
       