import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../../schema/formSchema";
import "./Contact.scss";
import { Helmet } from "react-helmet";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginFormSchema),
	});
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<>
			<Helmet>
				<title>Contact Page</title>
			</Helmet>
			<div className="contact-page">
				<div className="container">
					<div className="contact-page_desc">
						<h1>Contact</h1>
						<p>
							StoryHub theme comes with a contact form built-in. You can use
							this form with Gatsbay Js service and get up to 50 submissions for
							free per form per month. Also, you can easily switch to another
							service if you want.
						</p>
					</div>
					<div className="form">
						{/* <form> */}
						<div className="form_inputs">
							<div className="form_inputs-name">
								<label>Name</label>
								<br />
								<div className="input-name">
									<input id="name" {...register("name")} />
									{errors.name ? (
										<span style={{ color: "red" }}>{errors.name.message}</span>
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="form_inputs-email">
								<label>Email</label>
								<br />
								<div className="input-email">
									<input id="email" {...register("email")} />
									{errors.email ? (
										<span style={{ color: "red" }}>{errors.email.message}</span>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
						<div className="form-text">
							<label>Message</label>
							<br />
							<textarea {...register("message")} />
							{errors.message ? (
								<span style={{ color: "red" }}>{errors.message.message}</span>
							) : (
								<></>
							)}
						</div>
						<button className="form_button-submit" onClick={handleSubmit()}>
							Submit
						</button>
						{/* </form> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
