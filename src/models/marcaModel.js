const pool = require("../config/database");

const getMarcas = async () => {
    const result = await pool.query("SELECT * FROM marcas");
    return result.rows;
};

module.exports = {
    getMarcas,
};

