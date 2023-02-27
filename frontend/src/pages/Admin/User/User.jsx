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

const User = () => {
	//get products from api
	const [user, setUser] = useState([]);
	const getData = async () => {
		const res = await axios.get("http://localhost:8080/auth/register");
		setUser(res.data);
	};
	useEffect(() => {
		getData();
	}, []);
	//post products to api
	const [state, setState] = useState({
		username: "",
		surname: "",
		email: "",
		password: "",
	});
	const [id, setId] = useState(undefined);

	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	};
	console.log(state);
	//add
	// const addData = async () => {
	// 	await axios.post("http://localhost:8080/auth/register", state);
	// 	getData();
	// };
	//delete
	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:8080/auth/register/${id}`);
		console.log("delete");
		getData();
	};

	//update
	const handleEditClick = (data) => {
        console.log(state);
		setState({
			username: data.username,
			surname: data.surname,
			password: data.password,
		});
		setId(data._id);
	};

	const updateData = async (id) => {
		await axios.put(`http://localhost:8080/auth/register/${id}`, state);
		getData();
		setState({
			username: "",
			surname: "",
			password: "",
		});
	};

	return (
		<>
			<div className="products">
				<Container fixed>
					<TableContainer
						component={Paper}
						sx={{ width: "100%", margin: "auto" }}
					>
						<Table aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell align="center">Username</StyledTableCell>
									<StyledTableCell align="center">Surname</StyledTableCell>
									<StyledTableCell align="center">Email</StyledTableCell>
									<StyledTableCell align="center">Password</StyledTableCell>
									<StyledTableCell align="center">Delete</StyledTableCell>
									<StyledTableCell align="center">Edit</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{user?.map((item) => (
									<StyledTableRow key={item._id}>
										<StyledTableCell component="th" scope="row">
											{item.username}
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.surname}
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.email}
										</StyledTableCell>
										<StyledTableCell align="center" style={{fontSize:8}}>
											<p>{item.password}</p>
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
							placeholder="Username"
							name="username"
							onChange={(e) => handleChange(e)}
						/>

						<input
							placeholder="Surname"
							name="surname"
							onChange={(e) => handleChange(e)}
						/>
						<input
							placeholder="email"
							name="email"
							onChange={(e) => handleChange(e)}
						/>
						<input
							placeholder="password"
							name="password"
							onChange={(e) => handleChange(e)}
						/>

						<div className="btns">
						{/* <Button variant="contained" color="success" onClick={() => addData()}>Add User</Button> */}
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

export default User;