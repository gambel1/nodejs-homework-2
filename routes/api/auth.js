const express = require("express");
const { validatePostBody } = require("../../middlewares");
const register = require("../../controllers/auth");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/users/register",
  validatePostBody(schemas.registerSchema),
  register
);

module.exports = router;
