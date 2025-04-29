const express = require("express");
const router = express.Router();
const marcaController = require("../controllers/marcaController");

router.get("/", marcaController.getAllMarcas);
router.get("/:id", marcaController.getMarca);

module.exports = router;