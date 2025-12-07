const Sentry = require("@sentry/node");
const ValidationError = require("../errors/ValidationError");
const logger = require("../logger/logger");

module.exports = (err, req, res, next) => {
  logger.error({ message: err.message, stack: err.stack });

  if (!(err instanceof ValidationError)) {
    Sentry.captureException(err);
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: "error",
    message: err.message,
    errors: err.errors || null
  });
};
