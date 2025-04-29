const cosmeticoModel = require('../models/cosmeticoModel');

const getAllCosmeticos = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticos();
        res.status(200).json(cosmeticos);
    } catch (error) {
        console.error('Erro ao obter cosméticos:', error);
        res.status(500).json({ error: 'Erro ao obter cosméticos' });
    }
};

const getCosmetico = async (req, res) => {
    try {
        const cosmetico = await cosmeticoModel.getCosmeticoById(req.params.id);
        if (!cosmetico) {
            return res.status(404).json({ error: 'Cosmético não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter cosmético' });
    }
};

const createCosmetico = async (req, res) => {
    try {
        const { name, descricao, preco, marca_id } = req.body;
        const newCosmetico = await cosmeticoModel.createCosmetico(name, marca_id);
        res.status(201).json(newCosmetico);
    } catch (error) {
        console.error('Erro ao criar cosmético:', error);
        res.status(500).json({ error: 'Erro ao criar cosmético' });
    }
};

module.exports = {
    getAllCosmeticos,
    getCosmetico,
    createCosmetico,
};
