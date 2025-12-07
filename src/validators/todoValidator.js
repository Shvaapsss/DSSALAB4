const { body } = require('express-validator');

exports.createTodoValidator = [
  body('title').notEmpty().withMessage('Заголовок обязателен'),
  body('description').optional().isString()
];
