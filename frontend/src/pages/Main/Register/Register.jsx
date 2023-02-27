import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../../schema/formSchema";
import "./Register.scss";
import Swal from "sweetalert2"

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
	const addData = async() => {
		await axios.post("http://localhost:8080/auth/register", state)
        .then((data)=>{
			console.log(data);
			console.log(data);
			if(data.data.status=="ok"){
				Swal.fire({
					icon: "success",
					title: "Congratulations! Your account has been successfully created!",
					showConfirmButton: false,
					// timer: 1500,
				})
			}
		})
        console.log("a")
		console.log(state);
		
	// 	if (state.status == 200) {
    //         Swal.fire({
    //             icon: "success",
    //             title: "Təbriklər! Sizin hesabınız müvəffəqiyyətlə yaradıldı!",
    //             showConfirmButton: false,
    //             timer: 1500,
    //         }).then((c) => {
    //             navigate("/login");
    //         });
    //     } else {
    //         setErrorMessage(user.message);
    //     }
    // };
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
