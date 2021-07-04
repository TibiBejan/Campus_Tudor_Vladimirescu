// FORM LIBRARY
import * as yup from 'yup';

// PWD REGET EXPRESSION
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// STUDENT ENROLLMENT SCHEMA
export const adminSearchSchema = yup.object({
    university: yup.string(),
    searchQuerry: yup.string().matches(/^[ A-Za-z0-9_@./-]*$/g, "Your querry must contain only alphanumeric chars and the following: _@./-"),
});

export const updateStudentSchema = yup.object({
    first_name: yup.string().required("You must enter the first name").min(3, "First name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter the last name").min(3, "Last name should contain al least 3 characters"),
    email: yup.string().required("You must enter the e-mail adress").email("Please enter a valid e-mail adress"),
    role: yup.string().required("You must enter the desired role")
});

export const createStudentSchema = yup.object({
    first_name: yup.string().required("You must enter the first name").min(3, "First name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter the last name").min(3, "Last name should contain al least 3 characters"),
    email: yup.string().required("You must enter the e-mail adress").email("Please enter a valid e-mail adress"),
    password: yup.string().required("You must enter a password").matches(PASSWORD_REGEX, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_confirm: yup.string().required("You must enter a password confirm").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Your confirm password does not match, please try again")
    }),
    role: yup.string().required("You must enter the desired role")
});

