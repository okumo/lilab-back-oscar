DROP TABLE IF EXISTS products;
USE products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  descripcion VARCHAR(30),
  imagen VARCHAR(30),
  price INT(5) ,
  stock INT(3),
  category INT(2)
);

INSERT INTO products (descripcion, imagen, price, stock, category) 
VALUES ('lechuga', 'lechuga.jpg', 10, 5, 1),
 ('manzana', 'manzana.jpeg', 15, 5, 2),
  ('pepino', 'pepino.jpg', 20, 5, 1),
   ('pera', 'pera.jpg', 25, 5, 2),
    ('pina', 'pina.jpg', 30, 5, 2),
        ('zanahoria', 'zanahoria.jpg', 35, 5, 1);

DESCRIBE products;

SELECT * FROM products;

