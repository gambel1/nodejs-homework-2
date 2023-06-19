const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/contactsFunk");

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", controllers.add);

router.put("/:id", controllers.updateById);

router.delete("/:id", controllers.deleteById);

module.exports = router;
