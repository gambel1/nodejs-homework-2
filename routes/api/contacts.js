const express = require("express");
const controllers = require("../../controllers/contactsFunk");
const {
  validatePutBody,
    validatePostBody,
  validateFavorite
} = require("../../middlewares/validateBody");
const isValidId = require("../../middlewares/isValidId");

const router = express.Router();

const { schemas } = require("../../models/contacts");

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post("/", validatePostBody(schemas.addSchema), controllers.add);

router.put(
  "/:contactId",
  isValidId,
  validatePutBody(schemas.addSchema),
  controllers.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

router.delete("/:contactId", isValidId, controllers.deleteById);

module.exports = router;
