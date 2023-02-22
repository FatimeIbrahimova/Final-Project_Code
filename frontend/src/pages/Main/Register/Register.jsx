import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../../schema/formSchema";
import "./Register.scss";

const Register = () => {
	//
	const [state, setState] = useState({
		username: "",
		surname:"",
		email: "",
		password: undefined,
		confirmPassword:undefined,
	});
	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const addData = async () => {
		await axios.post("localhost:8080/register", state);
console.log("a")
		console.log(state);
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
        <title>Register Page</title>
      </Helmet>
		<div className="register-page">
			<div className="register-page_wrapper">
				<div className="register-page_wrapper-title">
					<h1>Sign Up</h1>
				</div>
				<form>
				<label for="username">Username</label>
					<br />
					<input id="username" type="text" {...register("username")} onChange={(e) => handleChange(e)} name="username"/><br/>
					{errors?.username && (
						<span style={{ color: "red" }}>{errors.username.message}</span>
					)}
					<br />
					<label for="Surname">Surname</label>
					<br />
					<input id="surname" type="text" {...register("surname")} onChange={(e) => handleChange(e)} name="surname"/><br/>
					{errors?.surname && (
						<span style={{ color: "red" }}>{errors.surname.message}</span>
					)}
					<br />
					<label for="email">Email</label>
					<br />
					<input id="email" type="email" {...register("email")} onChange={(e) => handleChange(e)} name="email"/><br/>
					{errors?.email && (
						<span style={{ color: "red" }}>{errors.email.message}</span>
					)}
					<br />
					<label for="password">Password</label>
					<br />
					<input type="password" id="password" {...register("password")} onChange={(e) => handleChange(e)} name="password"/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}
					<br/>
					<label for="new-password">Confirm Password</label>
					<br />
					<input type="password" id="new-password" {...register("passwor")} onChange={(e) => handleChange(e)} name="confirmPassword"/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}

				</form>
				<button className="sign-btn" 
				onClick={handleSubmit(addData())}>Sign Up</button>
				<div className="sign-bottom">
					<span>Already have an account?</span>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
		</>
	);
};

export default Register;
