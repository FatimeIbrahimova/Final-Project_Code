import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../../schema/formSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import "./Login.scss";
import { Helmet } from "react-helmet";
import axios from "axios";

const AdminLogin = () => {
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
		await axios.post("http://localhost:8080/auth/adminLogin", state)
		.then((data)=>{
			console.log(data,"userAdminRegister")
			if(data.data.status=="ok"){
				alert("login successful");
				window.localStorage.setItem("user",JSON.stringify(data.data.data))
				window.location.href="/admin/dashboard"
				// console.log("data.data");
			}
		})
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
					<input type="password" {...register("password")} onChange={(e) => handleChange(e)} name="password"/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}
				</form>
				<button className="login-btn" onClick={handleSubmit(addData())}>Login</button>
			</div>
		</div>
		</>
	);
};

export default AdminLogin;