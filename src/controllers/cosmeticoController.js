const cosmeticoModel = require("../models/cosmeticoModel");

const getAllCosmeticos = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticos();
        res.status(200).json(cosmeticos);
    } catch (error) {
        console.error("Erro ao obter cosméticos:", error);
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
        console.error("Erro ao obter cosmético:", error);
        res.status(500).json({ error: "Erro ao obter cosmético" });
    }
};

const createCosmetico = async (req, res) => {
    try {
        console.log(req.body);
        const { name, marca, preco } = req.body;

        if (!name || !marca || !preco) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: name, marca, preco" });
        }

        const newCosmetico = await cosmeticoModel.createCosmetico(name, marca, preco);
        res.status(201).json(newCosmetico);
    } catch (error) {
        console.error("Erro ao criar cosmético:", error);
        res.status(500).json({ error: "Erro ao criar cosmético" });
    }
};

const updateCosmetico = async (req, res) => {
    try {
        const { name, marca, preco } = req.body;

        if (!name || !marca || !preco) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios: name, marca, preco" });
        }

        const updatedCosmetico = await cosmeticoModel.updateCosmetico(req.params.id, name, marca, preco);

        if (!updatedCosmetico) {
            return res.status(404).json({ error: "Cosmético não encontrado" });
        }

        res.status(200).json(updatedCosmetico);
    } catch (error) {
        console.error("Erro ao atualizar cosmético:", error);
        res.status(500).json({ error: "Erro ao atualizar cosmético" });
    }
};

const deleteCosmetico = async (req, res) => {
    try {
        const message = await cosmeticoModel.deleteCosmetico(req.params.id);
        res.status(200).json(message);
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
