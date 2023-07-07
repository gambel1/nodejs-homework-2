const isValidId = require("./isValidId");
const validatePostBody = require("./validatePostBody");
const validatePutBody = require("./validatePutBody");
const validateFavorite = require("./validateFavorite");
// const validateConflict = require('./validateConflict')
const authenticate = require("./authenticate");

module.exports = {
  isValidId,
  validatePostBody,
  validatePutBody,
  validateFavorite,
  // validateConflict
  authenticate,
};
