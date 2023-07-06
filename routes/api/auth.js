const express = require("express");
const { validatePostBody, authenticate } = require("../../middlewares");
const { register, login, getCurrent, logout } = require("../../controllers/auth");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/users/register",
  validatePostBody(schemas.registerSchema),
  register
);

router.post("/users/login", validatePostBody(schemas.loginSchema), login);

router.get("/users/current", authenticate, getCurrent);

router.post("/users/logout", authenticate, logout);

module.exports = router;
