import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../../schema/formSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.scss";
import { Helmet } from "react-helmet";
import axios from "axios";

const Login = () => {
	const [state, setState] = useState({
		email: "",
		password: undefined,
	});
	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
		console.log(state);
		window.localStorage.setItem("token",state)
		console.log(window.localStorage.setItem("token",state));
		window.location.href="./user"
	};
	const addData = () => {
		 axios.post("http://localhost:8080/auth/login", state);
        console.log("b")
	};
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
					<label>Email</label>
					<br />
					<input type="email" {...register("email")} onChange={(e) => handleChange(e)} name="email"/><br/>
					{errors?.email && (
						<span style={{ color: "red" }}>{errors.email.message}</span>
					)}
					<br />
					<label>Password</label>
					<br />
					<input type="password" {...register("password")} onChange={(e) => handleChange(e)} name="password"/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}
				</form>
				<button className="login-btn" onClick={handleSubmit(addData())}>Login</button>
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
