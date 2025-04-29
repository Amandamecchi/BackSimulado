const marcaModel = require("../models/marcaModel");

const getAllMarcas = async (req, res) => {
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
        const marca = await marcaModel.getMarcaById(req.params.id);
        if (!marca) {
            return res.status(404).json({ error: "Marca não encontrada" });
        };
        res.status(200).json(marca);
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter marca" });
        }
    };

const createMarca = async (req, res) => {
    try {
        const { name, pais_origem } = req.body;

        if (!name || !pais_origem) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: name, pais_origem" });
        }

        const newMarca = await marcaModel.createMarca(name, pais_origem);
        res.status(201).json(newMarca);
    } catch (error) {
        console.error("Erro ao criar marca:", error);
        res.status(500).json({ error: "Erro ao criar marca" });
    }
};

const deleteMarca = async (req, res) => {
    try {
        const message = await marcaModel.deleteMarca(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar marca" });
    }
};

const updateMarca = async (req, res) => {
    try {
        const { name, pais_origem } = req.body;
        if (!name || !pais_origem) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: name, pais_origem" });
        }

        const updatedMarca = await marcaModel.updateMarca(req.params.id, name, pais_origem);

        if (!updatedMarca) {
            return res.status(404).json({ error: "Marca não encontrada" });
        }

        res.status(200).json(updatedMarca);
    } catch (error) {
        console.error("Erro ao atualizar marca:", error);
        res.status(500).json({ error: "Erro ao atualizar marca" });
    }
};

module.exports = {
    getAllMarcas,
    getMarca,
    createMarca,
    deleteMarca,
    updateMarca,
};
