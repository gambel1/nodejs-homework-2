const express = require("express");
const { validatePostBody } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post("/users/register", validatePostBody(userSchemas.registerSchema));

module.exports = router;
