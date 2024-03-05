-- Active: 1709567957641@@127.0.0.1@3306CREATE DATABASE students;
CREATE DATABASE releevant;

USE releevant;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(255) NOT NULL
);

INSERT INTO students (NAME, LAST_NAME, AGE, GENDER) VALUES 
('Alvaro', 'Frias Ruiz', 20, 'Masculino'),
('Mireilla', 'Ramirez Camacho', 22, 'Femenino')
('Juan', 'Gonzalez', 20, 'Masculino'),
('Manoli', 'Pedrosa', 40, 'Femenino')
       