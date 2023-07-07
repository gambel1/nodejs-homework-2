const { Contact } = require("../models");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const result = await Contact.find({ owner }).populate(
      "owner",
      "email password"
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
