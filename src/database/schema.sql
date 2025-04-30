CREATE DATABASE simulado;
\c simulado;

CREATE TABLE marcas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pais_origem VARCHAR(255) NOT NULL
);

CREATE TABLE cosmeticos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    marca_id INT REFERENCES marcas(id) ON DELETE SET NULL
);

INSERT INTO marcas (name, pais_origem) VALUES
('Eudora', 'EUA'),
('O Boticário', 'Brasil'),
('Natura', 'França'),
('Melu', 'Brasil');

INSERT INTO cosmeticos (name, preco, marca_id) VALUES
('Shampoo', 25.90, 1),
('Hidratante', 35.50, 2),
('Perfume', 89.99, 3),
('Sabonete', 9.99, 4);
