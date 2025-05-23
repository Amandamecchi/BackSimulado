const pool = require("../config/database");

const getCosmeticos = async ({ marca, precoMin, precoMax }) => {
    let query = `
        SELECT cosmeticos.*, marcas.name AS marca_name 
        FROM cosmeticos 
        LEFT JOIN marcas ON cosmeticos.marca_id = marcas.id
        WHERE 1=1
    `;
    const values = [];
    let index = 1;

    if (marca) {
        query += ` AND marcas.name ILIKE $${index++}`;
        values.push(`%${marca}%`);
    }
    if (precoMin) {
        query += ` AND cosmeticos.preco >= $${index++}`;
        values.push(precoMin);
    }
    if (precoMax) {
        query += ` AND cosmeticos.preco <= $${index++}`;
        values.push(precoMax);
    }

    const result = await pool.query(query, values);
    return result.rows;
};

const getCosmeticoById = async (id) => {
    const result = await pool.query(
        `SELECT cosmeticos.*, marcas.name AS marca_name 
        FROM cosmeticos 
        LEFT JOIN marcas ON cosmeticos.marca_id = marcas.id 
        WHERE cosmeticos.id = $1`, [id]
    );
    return result.rows[0];
};

const createCosmetico = async (name, marca, preco) => {
    const query = "INSERT INTO cosmeticos (name, marca, preco) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, marca, preco];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const deleteCosmetico = async (id) => {
    const result = await pool.query("DELETE FROM cosmeticos WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Cosmético não encontrado." };
    }

    return { message: "Cosmético deletado com sucesso." };
};

const updateCosmetico = async (id, name, marca, preco) => {
    const query = "UPDATE cosmeticos SET name = $1, marca = $2, preco = $3 WHERE id = $4 RETURNING *";
    const values = [name, marca, preco, id];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = {
    getCosmeticos,
    getCosmeticoById,
    deleteCosmetico,
    createCosmetico,
    updateCosmetico,
};