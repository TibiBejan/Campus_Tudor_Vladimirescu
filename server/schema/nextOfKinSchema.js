const { body } = require('express-validator');

// CREATE KIN
exports.createKinSchema = [
    body('first_name')
        .exists()
        .withMessage('Your first name is required')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('First Name is not valid'),
    body('last_name')
        .exists()
        .withMessage('Your last name is required')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('Last Name is not valid'),
    body('email')
        .exists()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a valid email')
        .normalizeEmail(),
    body('relation')
        .exists()
        .withMessage('Relation is required')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('Kin is not valid, please try again!'),
    body('adress')
        .exists()
        .withMessage('Adress is required')
        .trim().escape(),
    body('phone_number')
        .exists()
        .withMessage('Phone Number is required')
        .isNumeric()
        .withMessage('Phone number must be numeric.')
        .isMobilePhone()
        .withMessage('This phone number is not valid, please try again.')
        .trim().escape(),
]

// UPDATE KIN
exports.updateKinSchema = [
    body('first_name')
        .optional()
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('First Name is not valid'),
    body('last_name')
        .optional()
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('Last Name is not valid'),
    body('email')
        .optional()
        .isEmail()
        .withMessage('Must be a valid email')
        .normalizeEmail(),
    body('relation')
        .optional()
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('Kin is not valid, please try again!'),
    body('adress')
        .optional()
        .trim().escape(),
    body('phone_number')
        .optional()
        .isNumeric()
        .withMessage('Phone number must be numeric.')
        .isMobilePhone()
        .withMessage('This phone number is not valid, please try again.')
        .trim().escape(),
]