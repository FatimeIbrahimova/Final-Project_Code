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
	message: yup.string().required("Required"),
	username: yup.string().required("Username is required"),
	surname: yup.string().required("Surname is required"),
	url: yup.string("url must be string").required("url is required"),
	date: yup.string("date must be string").required("date is required"),
	title: yup.string("title must be string").required("title is required"),
	desc: yup.string("desc must be string").required("desc is required"),
});
