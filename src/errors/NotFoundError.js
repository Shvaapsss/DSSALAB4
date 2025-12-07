const AppError = require('./AppError');

class NotFoundError extends AppError {
  constructor(message = "Ресурс не найден") {
    super(message, 404);
  }
}

module.exports = NotFoundError;
