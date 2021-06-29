// FORM LIBRARY
import * as yup from 'yup';

// PWD REGET EXPRESSION
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// LOGIN SCHEMA
export const loginSchema = yup.object({
    email: yup.string().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress"),
    password: yup.string().required("You must enter a password").matches(PASSWORD_REGEX, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
});

// REGISTER SCHEMA
export const registerSchema = yup.object({
    first_name: yup.string().required("You must enter your first name").min(3, "Your first name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter your last name").min(3, "Your last name should contain al least 3 characters"),
    email: yup.string().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress"),
    password: yup.string().required("You must enter a password").matches(PASSWORD_REGEX, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_confirm: yup.string().required("You must enter a password confirm").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Your confirm password does not match, please try again")
    })
}); 

// FORGOT PASSWORD SCHEMA
export const forgotPwdSchema = yup.object({
    email: yup.string().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress"),
});

// RESET PASSWORD SCHEMA
export const resetPwdSchema = yup.object({
    password: yup.string().required("You must enter a password").matches(PASSWORD_REGEX, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_confirm: yup.string().required("You must enter a password confirm").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Your confirm password does not match, please try again")
    })
});


