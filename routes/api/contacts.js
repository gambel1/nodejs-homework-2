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

const { modelContactSchemas } = require("../../models");

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validatePostBody(modelContactSchemas.addSchema), add);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validatePutBody(modelContactSchemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateFavorite(modelContactSchemas.updateFavoriteSchema),
  updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, deleteById);

module.exports = router;
