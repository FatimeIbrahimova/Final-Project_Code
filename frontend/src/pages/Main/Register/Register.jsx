import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../../schema/formSchema";
import "./Register.scss";

const Register = () => {
	const [span,setSpan]=useState("hidden")
	//
	const [state, setState] = useState({
		username: "",
		surname:"",
		email: "",
		password: undefined,
		// Confirmpassword:undefined,
	});
	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
		console.log(state);
	};
	const addData = () => {
		 axios.post("http://localhost:8080/auth/register", state);
        console.log("a")
		console.log(state);
		// if(state.password !== state.Confirmpassword){
        //    setSpan("visible")
		// }
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
        <title>Register Page</title>
      </Helmet>
		<div className="register-page">
			<div className="register-page_wrapper">
				<div className="register-page_wrapper-title">
					<h1>Sign Up</h1>
				</div>
				<form>
				<label>Username</label>
					<br />
					<input id="username" type="text" {...register("username")} onChange={(e) => handleChange(e)} name="username"/><br/>
					{errors?.username && (
						<span style={{ color: "red" }}>{errors.username.message}</span>
					)}
					<br />
					<label>Surname</label>
					<br />
					<input id="surname" type="text" {...register("surname")} onChange={(e) => handleChange(e)} name="surname"/><br/>
					{errors?.surname && (
						<span style={{ color: "red" }}>{errors.surname.message}</span>
					)}
					<br />
					<label>Email</label>
					<br />
					<input id="email" type="email" {...register("email")} onChange={(e) => handleChange(e)} name="email"/><br/>
					{errors?.email && (
						<span style={{ color: "red" }}>{errors.email.message}</span>
					)}
					<br />
					<label>Password</label>
					<br />
					<input type="password" autoComplete="password" {...register("password")} onChange={(e) => handleChange(e)} name="password"/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}
					<br/>
					{/* <label>Confirm Password</label>
					<br />
					<input type="password" {...register("passwor")} onChange={(e) => handleChange(e)} name="Confirmpassword"/><br/>
					{errors?.password && (
						<span style={{ color: "red" }}>{errors.password.message}</span>
					)}
					<div className={span}>
					<span style={{color:"red"}}>Passwords Don't Match</span>
					</div> */}

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
