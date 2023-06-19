const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/contactsFunk");

const { validatePutBody } = require("../../middlewares/validateBody");
const { validatePostBody } = require("../../middlewares/validateBody");

const schemas = require("../../schemas/contacts");

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", validatePostBody(schemas.addSchema), controllers.add);

router.put("/:id", validatePutBody(schemas.addSchema), controllers.updateById);

router.delete("/:id", controllers.deleteById);

module.exports = router;
