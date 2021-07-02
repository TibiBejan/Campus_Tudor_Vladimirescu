// FORM LIBRARY
import * as yup from 'yup';

// STUDENT ENROLLMENT SCHEMA
export const adminSearchSchema = yup.object({
    university: yup.string(),
    searchQuerry: yup.string().matches(/^[ A-Za-z0-9_@./-]*$/g, "Your querry must contain only alphanumeric chars and the following: _@./-"),
});

