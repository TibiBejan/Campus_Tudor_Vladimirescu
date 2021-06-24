const { body } = require('express-validator');

exports.createStudentMetaSchema = [
    body('username')
        .exists()
        .withMessage('Username is required')
        .isAlphanumeric()
        .withMessage('Username must contain only alphanumeric chars: letters and numbers')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('Username is not valid'),
    body('dob')
        .exists()
        .withMessage('Your date of birth is required')
        .isISO8601()
        .withMessage('Must be a valid date format')
        .trim().escape()
        .withMessage('Your date of birth is not valid'),
    body('sex')
        .exists()
        .withMessage('You must specify your gender')
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('nationality')
        .exists()
        .withMessage('You must specify your nationality')
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('phone_number')
        .exists()
        .withMessage('Phone Number is required')
        .isNumeric()
        .withMessage('Phone number must be numeric.')
        .isMobilePhone()
        .withMessage('This phone number is not valid, please try again.')
        .trim().escape(),
    body('adress')
        .exists()
        .withMessage('Adress is required')
        .trim().escape(),
    body('city')
        .exists()
        .withMessage('You must specify your city')
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('state_province')
        .exists()
        .withMessage('You must specify your city')
        .isAlphanumeric()
        .withMessage('This field must contain only alphanumeric chars: letters and numbers')
        .trim().escape(),
    body('country')
        .exists()
        .withMessage('You must specify your country')
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('zip_code')
        .exists()
        .withMessage('You must specify your zip code')
        .trim().escape(),
]

exports.updateStudentMetaSchema = [
    body('username')
        .optional()
        .isAlphanumeric()
        .withMessage('Username must contain only alphanumeric chars: letters and numbers')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
        .trim().escape()
        .withMessage('Username is not valid'),
    body('dob')
        .optional()
        .isISO8601()
        .withMessage('Must be a valid date format')
        .trim().escape()
        .withMessage('Your date of birth is not valid'),
    body('sex')
        .optional()
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('nationality')
        .optional()
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('phone_number')
        .optional()
        .isNumeric()
        .withMessage('Phone number must be numeric.')
        .isMobilePhone()
        .withMessage('This phone number is not valid, please try again.')
        .trim().escape(),
    body('adress')
        .optional()
        .trim().escape(),
    body('city')
        .optional()
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('state_province')
        .optional()
        .isAlphanumeric()
        .withMessage('This field must contain only alphanumeric chars: letters and numbers')
        .trim().escape(),
    body('country')
        .optional()
        .isAlpha()
        .withMessage('This field must contain only letters')
        .trim().escape(),
    body('zip_code')
        .optional()
        .trim().escape(),
]
