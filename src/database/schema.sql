CREATE DATABASE simulado;
\c simulado;

CREATE TABLE cosmeticos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE marcas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pais_origem VARCHAR(255) NOT NULL,
    cosmeticos_id INT REFERENCES cosmeticos(id) ON DELETE CASCADE
);

INSERT INTO marcas (name, pais_origem, cosmeticos_id) VALUES
('Eudora', 'EUA', 1),
('O boticario', 'EUA', 2),
('Natura', 'França', 3),
('Melu', 'Brasil', 4);

INSERT INTO cosmeticos (name, marca, preco) VALUES
('Shampoo', 'Eudora', 29.90),
('Hidratante', 'O boticario', 49.90),
('Perfume', 'Natura', 99.90),
('Sabonete', 'Melu', 9.90);