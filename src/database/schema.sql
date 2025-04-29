CREATE DATABASE simulado;
\c simulado;

CREATE TABLE cosmeticos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tipo VARCHAR(100),
    preco DECIMAL(10,2),
    marca_id INT REFERENCES marcas(id) ON DELETE CASCADE
);

CREATE TABLE marcas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pais_origem VARCHAR(255) NOT NULL
);

INSERT INTO marcas (name, pais_origem, cosmeticos_id) VALUES
('Eudora', 'EUA'),
('O Boticario', 'EUA'),
('Natura', 'França'),
('Melu', 'Brasil');

INSERT INTO cosmeticos (name, marca, preco) VALUES
('Shampoo', 'Cabelo', 25.90, 1),
('Hidratante', 'Corpo', 35.50, 2),
('Perfume', 'Fragrância', 89.99, 3),
('Sabonete', 'Corpo', 9.99, 4);