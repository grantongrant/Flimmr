const { validationResult } = require('express-validator');
const { check } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

const updateImageUrl = check('photo.imageUrl')
  .notEmpty()
  .isURL()
  .withMessage('URL for image must be a valid URL.')

const imageUrl = check('imageUrl')
  .notEmpty()
  .isURL()
  .withMessage('URL for image must be a valid URL.');

const updateDescription = check('photo.description')
  .notEmpty()
  .withMessage('Description must contain text.');

const description = check('description')
  .notEmpty()
  .withMessage('Description must contain text.');

const validateCreate = [
  imageUrl,
  description,
  handleValidationErrors,
];

const validateUpdate = [
  updateImageUrl,
  updateDescription,
  handleValidationErrors,
];

module.exports = {
  handleValidationErrors,
  validateCreate,
  validateUpdate
};
