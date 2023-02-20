INSERT INTO artist(name)
VALUES ('Brad'),
('Joe'),
('Bill');

SELECT * FROM artist DESC LIMIT 10;

SELECT * FROM artist ASC limit 5;

SELECT * FROM artist WHERE name LIKE 'black%';

SELECT * FROM artist WHERE name LIKE '%black%';