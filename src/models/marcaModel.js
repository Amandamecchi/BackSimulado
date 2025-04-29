const pool = require("../config/database");

const getMarcas = async () => {
    const result = await pool.query("SELECT * FROM marcas");
    return result.rows;
};

const getMarcasById = async (id) => {
    const result = await pool.query("SELECT * FROM marcas WHERE id = $1", [id]);
    return result.rows[0]; 
};

const createMarca = async (name, pais_origem) => {
    const query = "INSERT INTO marcas (name, pais_origem) VALUES ($1, $2) RETURNING *";
    const values = [name, pais_origem];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const updateMarca = async (id, name, founder) => {
    const result = await pool.query(
        "UPDATE marcas SET name = $1, founder = $2 WHERE id = $3 RETURNING *",
        [name, founder, id]
    );
    return result.rows[0];
};

const deleteMarca = async (id) => {
    const result = await pool.query("DELETE FROM marcas WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { message:"Marca não encontrada" };
    }
    return { message: "casa deletada com sucesso" }; 
};


module.exports = {
    getMarcas,
    getMarcasById ,
    createMarca,
    updateMarca,
    deleteMarca,
};

