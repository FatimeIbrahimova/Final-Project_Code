import React from "react";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../../schema/formSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.scss";
import { Helmet } from "react-helmet";

const Login = () => {
	//Yup
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginFormSchema) });
	return (
		<>
		<Helmet>
        <title>Login Page</title>
      </Helmet>
		<div className="login-page">
			<div className="login-page_wrapper">
				<div className="login-page_wrapper-title">
					<h1>Login</h1>
				</div>
				<form>
					<label for="email">Email</label>
					<br />
					<input id="email" type="email" {...register("email")} /><br/>
					{errors?.email && (
						<span style={{ color: "red" }}>{errors.email.message}</span>
					)}
					<br />
					<label for="password">Password</label>
					<br />
					<input type="password" id="password" {...register("password")}/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}
				</form>
				<button className="login-btn" onClick={handleSubmit()}>Login</button>
				<div className="login-bottom">
					<span>No account?</span>
					<Link to="/register">Sign Up</Link>
				</div>
			</div>
		</div>
		</>
	);
};

export default Login;
