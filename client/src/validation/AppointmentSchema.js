// FORM LIBRARY
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const appointmentSchema = yup.object({
    first_name: yup.string().required("You must enter the first name").min(3, "First name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter the last name").min(3, "Last name should contain al least 3 characters"),
    email: yup.string().required("You must enter the e-mail adress").email("Please enter a valid e-mail adress"),
    dob: yup.date().required("You must enter your date of birth"),
    phone_number: yup.string().required("You must enter your phone number").matches(phoneRegExp, "Your kin's phone number is not valid"),
    message: yup.string().required("You must enter your message")
});