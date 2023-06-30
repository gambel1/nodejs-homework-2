const { HttpError } = require('../helpers')

const validatePutBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, "missing field"));
    }
    next();
  };
  return func;
};

module.exports = validatePutBody