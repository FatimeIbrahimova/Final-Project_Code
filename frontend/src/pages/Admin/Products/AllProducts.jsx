import * as React from "react";
import "../Products/AllProducts.scss";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Container } from "@mui/system";
import { loginFormSchema } from "../../../schema/formSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const AllProducts = () => {
	//get products from api
	const [filter, setFilter] = useState([]);
	const getData = async () => {
		const res = await axios.get("http://localhost:8080/allProductt");
		setFilter(res.data);
	};
	useEffect(() => {
		getData();
	}, []);
	//post products to api
	const [state, setState] = useState({
		url: "",
		name: "",
		title: "",
		desc: "",
		allDesc: "",
		date: moment(new Date()).format("ll"),
	});
	const [id, setId] = useState(undefined);

	const addData = async () => {
		await axios.post("http://localhost:8080/allProductt", state);
		Swal.fire({
			title: "Success!",
			text: "Data Added to API",
			icon: "success",
			confirmButtonText: "Okay",
		});
		console.log(state);
		getData();
	};
	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	};
	console.log(state);

	//delete
	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:8080/allProductt/${id}`);
		getData();
	};

	//update
	const handleEditClick = (data) => {
		setState({
			url: data.url,
			name: data.name,
			title: data.title,
			desc: data.desc,
			allDesc: data.allDesc,
			date: new Date(),
		});
		setId(data._id);
		console.log("b");
	};

	const updateData = async (id) => {
		await axios.put(`http://localhost:8080/allProductt/${id}`, state);
		Swal.fire({
			title: "Success!",
			text: "Data Updated",
			icon: "success",
			confirmButtonText: "Okay",
		});
		getData();
		setState({
			url: "",
			name: "",
			title: "",
			desc: "",
			allDesc: "",
		});
	};

	//Yup
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginFormSchema) });
	return (
		<>
			<div className="products">
				<Container fixed>
					<TableContainer
						component={Paper}
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Table aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell align="center">Image</StyledTableCell>
									<StyledTableCell align="center">Category</StyledTableCell>
									<StyledTableCell align="center">Title</StyledTableCell>
									<StyledTableCell align="center">Desc</StyledTableCell>
									<StyledTableCell align="center">All Desc</StyledTableCell>
									<StyledTableCell align="center">Date</StyledTableCell>
									<StyledTableCell align="center">Delete</StyledTableCell>
									<StyledTableCell align="center">Edit</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filter?.map((item) => (
									<StyledTableRow key={item._id}>
										<StyledTableCell component="th" scope="row">
											<img src={item.url} alt="img" />
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.name}
										</StyledTableCell>
										<StyledTableCell sx={{ width: 200 }} align="center">
											{item.title}
										</StyledTableCell>
										<StyledTableCell align="center" sx={{ width: "15%" }}>
											{item.desc}
										</StyledTableCell>
										<StyledTableCell align="center" sx={{ width: "80" }}>
											<p style={{ fontSize: 3 }}>{item.allDesc}</p>
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.date}
										</StyledTableCell>
										<StyledTableCell align="center">
											<Button
												variant="contained"
												color="error"
												onClick={() => handleDelete(item._id)}
											>
												Delete
											</Button>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Button
												variant="contained"
												color="secondary"
												onClick={() => handleEditClick(item)}
											>
												Edit
											</Button>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
				<div className="add_inputs">
					<form>
						<input
							placeholder="Image"
							name="url"
							{...register("url")}
							onChange={(e) => handleChange(e)}
						/>
						{errors?.url && (
							<span style={{ color: "red" }}>{errors.url.message}</span>
						)}

						<input
							placeholder="Category"
							name="name"
							{...register("name")}
							onChange={(e) => handleChange(e)}
						/>
						{errors?.category ? (
							<span style={{ color: "red" }}>{errors.category.message}</span>
						) : (
							<></>
						)}
						<input
							placeholder="Title"
							name="title"
							{...register("title")}
							onChange={(e) => handleChange(e)}
						/>
						{errors?.title ? (
							<span style={{ color: "red" }}>{errors.title.message}</span>
						) : (
							<></>
						)}
						<input
							placeholder="Desc"
							name="desc"
							{...register("desc")}
							onChange={(e) => handleChange(e)}
						/>
						{errors?.desc ? (
							<span style={{ color: "red" }}>{errors.desc.message}</span>
						) : (
							<></>
						)}
						<input
							placeholder="All Desc"
							name="allDesc"
							onChange={(e) => handleChange(e)}
						/>
						<div className="btns">
							<Button
								variant="contained"
								color="success"
								onClick={() => addData()}
							>
								Add Product
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => updateData(id)}
							>
								update
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AllProducts;
