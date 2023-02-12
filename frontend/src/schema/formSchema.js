import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string("Email should be a string")
    .email("Please provide a valid email address")
    .required("Email address is required"),
  password: yup
    .string("Password is required")
    .required("Password is required")
    .min(6, "Password must have at least 6 characters."),
  message:yup
    .string()
    .required("Required"),
});