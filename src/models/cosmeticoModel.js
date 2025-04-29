const pool = require ('../config/database.js');

const  getCosmeticos = async () => {
    const result = await pool.query('SELECT cosmeticos.* FROM marcas.name AS marca, FROM  cosmeticos Left join marcas ON cosmeticos.marca_id ');
    return result[0];
};

const getCosmeticosById = async (id) => {
    const result = await pool.query('SELECT cosmeticos.* , marcas.name AS marca_name FROM cosmeticos LEFT JOIN houses ON cosmeticos.marcas_id = houses.id WHERE cosmeticos.id = $1', [id]);
    return result.rows[0];
};

const createCosmetico = async (name, marca_id) => {
    const result = await pool.query('INSERT INTO cosmeticos (name, marca_id) VALUES ($1, $2) RETURNING *', [name, marca_id]);
    return result.rows[0];
};

module.exports = {
    getCosmeticos,
    getCosmeticosById,
    createCosmetico,
};