const express = require("express");
const { validatePostBody, authenticate, upload } = require("../../middlewares");
const { register, login, getCurrent, logout, updateAvatar } = require("../../controllers");
const { modelUserSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/users/register",
  validatePostBody(modelUserSchemas.registerSchema),
  register
);

router.post(
  "/users/login",
  validatePostBody(modelUserSchemas.loginSchema),
  login
);

router.get("/users/current", authenticate, getCurrent);

router.post("/users/logout", authenticate, logout);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = router;
