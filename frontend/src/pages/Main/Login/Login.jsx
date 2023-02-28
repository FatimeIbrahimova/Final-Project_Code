import React, { useEffect, useState } from "react";
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
	};
	const addData =async () => {
		await axios.post("http://localhost:8080/auth/login", state)
		.then((data)=>{
			console.log(data,"userRegister")
			if(data.data.status=="ok"){
				alert("login successful");
				window.localStorage.setItem("token",JSON.stringify(data.data.data))
				window.localStorage.setItem("login",true)
				window.location.href="./user"
				console.log("data.data");
			}
		})
		
        console.log("login")
	};
	//Yup
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginFormSchema) });
	useEffect(()=>{
		window.scrollTo({
		  top:0,
		  left:0,
		  behavior:"smooth"
		})
	   },[])
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
					<input type="password" autoComplete="new-password"{...register("password")} onChange={(e) => handleChange(e)} name="password"/><br/>
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
