const AppError = require('./AppError');

class ValidationError extends AppError {
  constructor(errors) {
    super("Ошибка валидации данных", 400);
    this.errors = errors;
  }
}

module.exports = ValidationError;
