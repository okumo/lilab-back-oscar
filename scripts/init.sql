DROP TABLE IF EXISTS products;
USE products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  descripcion VARCHAR(30),
  imagen VARCHAR(30),
  price INT(5) ,
  stock INT(3),
  category INT(2)
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);
DESCRIBE products;

SELECT * FROM employee;