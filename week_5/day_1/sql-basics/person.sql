CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INTEGER,
    height INTEGER,
    city VARCHAR(30),
    favorite_color VARCHAR(20)
);

INSERT INTO person (name, age, height, city, favorite_color)
values ('Draden', 23, 193, 'Mapleton', 'Blue'),
('Kaleb', 25, 185, 'Mapleton', 'Red'),
('Matt', 23, 190, 'Springville', 'Green'),
('Jordan', 22, 170, 'Provo', 'Orange'),
('Elleigh', 19, 170, 'American Fork', 'Indigo');

SELECT * FROM person
ORDER BY height DESC;

SELECT * FROM person
ORDER BY height ASC;

SELECT * FROM person
ORDER BY age DESC;

SELECT * FROM person
WHERE age > 20;

SELECT * FROM person
WHERE age = 18;

SELECT * FROM person
WHERE age < 20 OR age > 30;

SELECT * FROM person
WHERE age != 27;

SELECT * FROM person
WHERE favorite_color != 'Red';

SELECT * FROM person
WHERE favorite_color != 'Red' and favorite_color != 'Blue';

SELECT * FROM person
WHERE favorite_color = 'Orange' OR favorite_color = 'Green';

SELECT * FROM person
WHERE favorite_color IN('Orange','Green','Blue');

SELECT * FROM person
WHERE favorite_color = 'Yellow' OR 'Purple';