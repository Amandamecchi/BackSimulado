const express = require("express");
const router = express.Router();
const cosmeticoController = require("../controllers/cosmeticoController");
const apiKeyMiddleware = require("../config/apiKey");
router.use(apiKeyMiddleware);
const upload = require("../config/upload");


router.get("/", cosmeticoController.getAllCosmeticos);
router.get("/:id", cosmeticoController.getCosmetico);
router.post("/", cosmeticoController.createCosmetico);
router.put("/:id", cosmeticoController.updateCosmetico);
router.delete("/:id", cosmeticoController.deleteCosmetico);

module.exports = router;