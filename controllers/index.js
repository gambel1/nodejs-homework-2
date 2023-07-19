const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");
const updateStatusContact = require("./updateStatusContact");
const deleteById = require("./deleteById");
const {
  register,
  verifyEmail,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("./auth");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
  register,
  verifyEmail,
  login,
  getCurrent,
  logout,
  updateAvatar,
};
