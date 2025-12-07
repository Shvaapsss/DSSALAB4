const { validationResult } = require('express-validator');
const ValidationError = require('../errors/ValidationError');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationError(errors.array());
  }

  next();
};
