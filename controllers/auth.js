const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const { User } = require("../models");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(409);
      throw new Error("Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
      email: newUser.email,
      name: newUser.name,
    });
  } catch (error) {
    res.status(res.statusCode).json({
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401);
      throw new Error("Email or password is wrong");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      res.status(401);
      throw new Error("Email or password is wrong");
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2300days" });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({ token });
  } catch (error) {
    res.status(res.statusCode).json({
      error: error.message,
    });
  }
};

const getCurrent = async (req, res) => {
  const { email, name } = req.user;
  res.json({ email, name });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success",
  });
};

module.exports = {
  register,
  login,
  getCurrent,
  logout
};
