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
  isValidId,
  validatePostBody,
  validatePutBody,
  validateFavorite,
  authenticate,
} = require("../../middlewares");

const router = express.Router();

const { schemas } = require("../../models/contacts");

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validatePostBody(schemas.addSchema), add);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validatePutBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateFavorite(schemas.updateFavoriteSchema),
  updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, deleteById);

module.exports = router;
