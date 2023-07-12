const isValidId = require("./isValidId");
const validatePostBody = require("./validatePostBody");
const validatePutBody = require("./validatePutBody");
const validateFavorite = require("./validateFavorite");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  isValidId,
  validatePostBody,
  validatePutBody,
  validateFavorite,
  authenticate,
  upload,
};
