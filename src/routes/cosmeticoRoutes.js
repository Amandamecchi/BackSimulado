const express = require("express");
const router = express.Router();
const cosmeticoController = require("../controllers/cosmeticoController");

router.get("/", cosmeticoController.getAllCosmeticos);
router.get("/:id", cosmeticoController.getCosmetico);
router.post("/", cosmeticoController.createCosmetico);

module.exports = router;