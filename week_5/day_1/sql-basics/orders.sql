CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(30),
    product_price INTEGER,
    quantity INTEGER
);

INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (2,'burger',6,2),
(3,'fries',2,1)

SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(quantity*product_price) FROM orders;

SELECT SUM(product_price) FROM orders WHERE person_id = 2;
