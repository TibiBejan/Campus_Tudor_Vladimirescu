const { body } = require('express-validator');

exports.createUserSchema = [
    body('firstName')
        .exists()
        .withMessage('Your first name is required')
        .isAlpha()
        .withMessage('Your first name must contain only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Your first name must be at least 3 chars long')
        .trim().escape()
        .withMessage('First Name is not valid'),
    body('lastName')
        .exists()
        .withMessage('Your last name is required')
        .isAlpha()
        .withMessage('Your last name must contain only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Your last name must be at least 3 chars long')
        .trim().escape()
        .withMessage('Last Name is not valid'),
    body('email')
        .exists()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a valid email')
        .normalizeEmail(),
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 chars long'),
    body('confirmPassword')
        .exists()
        .custom((value, { req }) => value === req.body.password)
        .withMessage('confirm_password field must have the same value as the password field'),
    body('role')
        .optional()
        .isIn(['admin', 'student'])
        .withMessage('Invalid Role type'),
]

exports.updateUserSchema = [
    body('firstName')
        .optional()
        .isAlpha()
        .withMessage('Your first name must contain only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Your first name must be at least 3 chars long')
        .trim().escape()
        .withMessage('First Name is not valid'),
    body('lastName')
        .optional()
        .isAlpha()
        .withMessage('Your last name must contain only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Your last name must be at least 3 chars long')
        .trim().escape()
        .withMessage('Last Name is not valid'),
    body('email')
        .optional()
        .isEmail()
        .withMessage('Must be a valid email')
        .normalizeEmail(),
    body('role')
        .optional()
        .isIn(['admin', 'student'])
        .withMessage('Invalid Role type'),
]