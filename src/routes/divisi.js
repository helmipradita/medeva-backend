const express = require("express");
const router = express.Router();
const { divisiController } = require("../controllers/divisi");

router.post("/", divisiController.create);
router.get("/", divisiController.get);
router.get("/:id", divisiController.getById);
router.put("/:id", divisiController.update);
router.put("/archive/:id", divisiController.archive);
router.put("/activate/:id", divisiController.activate);
router.delete("/:id", divisiController.delete);

module.exports = router;
