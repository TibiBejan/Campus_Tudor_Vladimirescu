// FORM LIBRARY
import * as yup from 'yup';

// PWD REGET EXPRESSION
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// UPDATE PASSWORD SCHEMA
export const updatePwdSchema = yup.object({
    password_confirm: yup.string().required("You must enter a password").matches(PASSWORD_REGEX, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_new: yup.string().required("You must enter a password").matches(PASSWORD_REGEX, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_new_confirm: yup.string().required("You must enter a password confirm").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password_new")], "Your confirm password does not match, please try again")
    })
});

// REGISTER SCHEMA
export const updateAccountDetailsSchema = yup.object({
    first_name: yup.string().required("You must enter your first name").min(3, "Your first name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter your last name").min(3, "Your last name should contain al least 3 characters"),
    email: yup.string().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress"),
}); 

// KIN SCHEMA
export const createKinSchema = yup.object({
    first_name: yup.string().required("You must enter your kin's first name").min(3, "Your kin first name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter your kin's last name").min(3, "Your kin last name should contain al least 3 characters"),
    email: yup.string().required("You must enter your kin's e-mail adress").email("Please enter a valid e-mail adress of your kin"),
    relation: yup.string().required("You must enter your kin relation").min(3, "Your relation should contain al least 3 characters"),
    adress: yup.string().required("You must enter your kin' adress"),
    phone_number: yup.string().required("You must enter your kin' phone number").matches(phoneRegExp, "Your kin's phone number is not valid")
}); 

// STUDENT META SCHEMA
export const createMetaSchema = yup.object({
    username: yup.string().required("You must enter your username").min(3, "Your username should contain al least 3 characters"),
    dob: yup.date().required("You must enter your date of birth"),
    sex: yup.string().required("You must select your gender"),
    nationality: yup.string().required("You must enter your nationality"),
    phone_number: yup.string().required("You must enter your phone number").matches(phoneRegExp, "Your kin's phone number is not valid"),
    adress: yup.string().required("You must enter your adress"),
    city: yup.string().required("You must enter your city"),
    state_province: yup.string().required("You must enter your state or province"),
    country: yup.string().required("You must enter your country"),
    zip_code: yup.string().required("You must enter your zip_code"),
}); 

// STUDENT ENROLLMENT SCHEMA
export const enrollSchema = yup.object({
    university: yup.string().required("You must select your university"),
    type_of_study: yup.string().required("You must select your type of study"),
    year_of_study: yup.number().required("You must select your year of study"),
    grade: yup.number().required("You must enter your previous year grade"),
    financial_type: yup.string().required("You must enter your financial type"),
    nationality: yup.string().required("You must enter your nationality"),
    student_gender: yup.string().required("You must enter select your gender")
}); 
