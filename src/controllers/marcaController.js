const marcaModel = require("../models/marcaModel");


const  getAllMarcas = async (req, res) => {
    try {
        const marcas = await marcaModel.getMarcas();
        res.status(200).json(marcas);
    } catch (error) {
        console.error("Erro ao obter marcas:", error);
        res.status(500).json({ error: "Erro ao obter marcas" });
    }
};

const getMarca = async (req, res) => {
    try {
        const house = await marcaModel.getMarcaById(req.params.id);
        if (!house) {
            return res.status(404).json({ error: "Marca não encontrada" });
        };
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter marca" });
        }
    };

    module.exports = {
        getAllMarcas,
        getMarca,
    };
    