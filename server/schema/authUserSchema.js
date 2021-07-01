const { body } = require('express-validator');

// UPDATE CURRENT PWD
exports.updatePwdSchema = [
    body('password_confirm')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 chars long'),
    body('password_new')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 chars long'),
    body('password_new_confirm')
        .exists()
        .custom((value, { req }) => value === req.body.password_new)
        .withMessage('confirm_password field must have the same value as the password field'),
]

// UPDATE CURRENT USER
exports.updateMe = [
    body('first_name')
        .optional()
        .isAlpha()
        .withMessage('First name must contain only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('First name must contain at least 3 chars long')
        .trim().escape()
        .withMessage('First Name is not valid'),
    body('last_name')
        .optional() 
        .isAlpha()
        .withMessage('Last name must contain only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Last name must contain at least 3 chars long')
        .trim().escape()
        .withMessage('Last Name is not valid'),
    body('email')
        .optional()
        .isEmail()
        .withMessage('Email is not valid')
        .normalizeEmail(),
]