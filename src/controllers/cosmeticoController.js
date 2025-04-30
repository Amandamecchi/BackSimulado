const cosmeticoModel = require("../models/cosmeticoModel");

const getAllCosmeticos = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticos(req.query);
        res.status(200).json(cosmeticos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao obter cosméticos" });
    }
};

const getCosmetico = async (req, res) => {
    try {
        const cosmetico = await cosmeticoModel.getCosmeticoById(req.params.id);
        if (!cosmetico) {
            return res.status(404).json({ error: "Cosmético não encontrado" });
        }
        res.status(200).json(cosmetico);
    } catch (error) {
        res.status(500).json({ error: "Erro ao obter cosmético" });
    }
};

const createCosmetico = async (req, res) => {
    try {
        const { name, preco, marca_id } = req.body;

        if (!name || !preco || !marca_id) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: name, preco, marca_id" });
        }

        const newCosmetico = await cosmeticoModel.createCosmetico(name, preco, marca_id);
        res.status(201).json(newCosmetico);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar cosmético" });
    }
};

const updateCosmetico = async (req, res) => {
    try {
        const { name, preco, marca_id } = req.body;

        if (!name || !preco || !marca_id) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: name, preco, marca_id" });
        }

        const updatedCosmetico = await cosmeticoModel.updateCosmetico(req.params.id, name, preco, marca_id);

        if (!updatedCosmetico) {
            return res.status(404).json({ error: "Cosmético não encontrado" });
        }

        res.status(200).json(updatedCosmetico);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar cosmético" });
    }
};

const deleteCosmetico = async (req, res) => {
    try {
        const message = await cosmeticoModel.deleteCosmetico(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao deletar cosmético:", error);
        res.status(500).json({ error: "Erro ao deletar cosmético" });
    }
};

module.exports = {
    getAllCosmeticos,
    getCosmetico,
    createCosmetico,
    updateCosmetico,
    deleteCosmetico,
};
