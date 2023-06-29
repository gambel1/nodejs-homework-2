const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
} = require("../../controllers");

const {
  validatePutBody,
  validatePostBody,
  validateFavorite,
} = require("../../middlewares/validateBody");
const isValidId = require("../../middlewares/isValidId");

const router = express.Router();

const { schemas } = require("../../models/contacts");

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validatePostBody(schemas.addSchema), add);

router.put(
  "/:contactId",
  isValidId,
  validatePutBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite(schemas.updateFavoriteSchema),
  updateStatusContact
);

router.delete("/:contactId", isValidId, deleteById);

module.exports = router;
