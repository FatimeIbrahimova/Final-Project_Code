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
import { Button } from "@mui/material";
import axios from "axios";
import { Container } from "@mui/system";
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

const AllCategories = () => {
	//get products from api
	const [categories, setCategories] = useState([]);
	const getData = async () => {
		const res = await axios.get("http://localhost:8080/categories");
		setCategories(res.data);
	};
	useEffect(() => {
		getData();
	}, []);
	//post products to api
	const [state, setState] = useState({
		categoryName: "",
		category: "",
		exampleImg: "",
		categoryDesc: "",
	});
	const [id, setId] = useState(undefined);

	const addData = async () => {
		await axios.post("http://localhost:8080/categories", state);
		Swal.fire({
			title: "Success!",
			text: "Data Added to API",
			icon: "success",
			confirmButtonText: "Okay",
		});
		console.log(state);
		getData();
		setState({
			categoryName: "",
			category: "",
			exampleImg: "",
			categoryDesc: "",
		});
	};
	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	};
	console.log(state);

	//delete
	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:8080/categories/${id}`);
		getData();
	};

	//update
	const handleEditClick = (data) => {
		setState({
			categoryName: data.categoryName,
			category: data.category,
			exampleImg: data.exampleImg,
			categoryDesc: data.categoryDesc,
		});
		setId(data._id);
	};

	const updateData = async (id) => {
		await axios.put(`http://localhost:8080/categories/${id}`, state);
		Swal.fire({
			title: "Success!",
			text: "Data Updated",
			icon: "success",
			confirmButtonText: "Okay",
		});
		getData();
		setState({
			categoryName: "",
			category: "",
			exampleImg: "",
			categoryDesc: "",
		});
	};

	return (
		<>
			<div className="products">
				<Container fixed>
					<TableContainer
						component={Paper}
						sx={{ width: "90%", margin: "auto" }}
					>
						<Table aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell align="center">Image</StyledTableCell>
									<StyledTableCell align="center">CategoryName</StyledTableCell>
									<StyledTableCell align="center">Category</StyledTableCell>
									<StyledTableCell align="center">Description</StyledTableCell>
									<StyledTableCell align="center">Delete</StyledTableCell>
									<StyledTableCell align="center">Edit</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{categories?.map((item) => (
									<StyledTableRow key={item._id}>
										<StyledTableCell component="th" scope="row">
											<img src={item.exampleImg} alt="img" />
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.categoryName}
										</StyledTableCell>
										<StyledTableCell sx={{ width: 200 }} align="center">
											{item.category}
										</StyledTableCell>
										<StyledTableCell align="center">
											<p style={{ fontSize: 8 }}>{item.categoryDesc}</p>
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
							name="exampleImg"
							onChange={(e) => handleChange(e)}
						/>

						<input
							placeholder="CategoryName"
							name="categoryName"
							onChange={(e) => handleChange(e)}
						/>
						<input
							placeholder="category"
							name="category"
							onChange={(e) => handleChange(e)}
						/>

						<input
							placeholder="Desc"
							name="categoryDesc"
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

export default AllCategories;
