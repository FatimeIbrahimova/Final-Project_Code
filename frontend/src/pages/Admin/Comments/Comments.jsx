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

const Comments = () => {
	//get products from api
	const [comments, setComments] = useState([]);
	const getData = async () => {
		const res = await axios.get("http://localhost:8080/comments");
		setComments(res.data);
	};
	useEffect(() => {
		getData();
	}, []);
	//post products to api
	const [state, setState] = useState({
		commentProfile: "",
		commentUser: "",
		commentDate: "",
		comment: "",
	});
	const [id, setId] = useState(undefined);

	const handleChange = (e) => {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	};
	console.log(state);

	//delete
	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:8080/comments/${id}`);
		console.log("delete");
		getData();
	};

	//update
	const handleEditClick = (data) => {
		console.log(state);
		setState({
			commentProfile: data.commentProfile,
			commentUser: data.commentUser,
			comment: data.comment,
		});
		setId(data._id);
	};

	const updateData = async (id) => {
		await axios.put(`http://localhost:8080/comments/${id}`, state);
		getData();
		setState({
			commentProfile: "",
			commentUser: "",
			comment: "",
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
									<StyledTableCell align="center">Profile</StyledTableCell>
									<StyledTableCell align="center">User</StyledTableCell>
									<StyledTableCell align="center">Date</StyledTableCell>
									<StyledTableCell align="center">Comments</StyledTableCell>
									<StyledTableCell align="center">Delete</StyledTableCell>
									<StyledTableCell align="center">Edit</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{comments?.map((item) => (
									<StyledTableRow key={item._id}>
										<StyledTableCell component="th" scope="row">
											<img src={item.commentProfile} alt="img" />
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.commentUser}
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.commentDate}
										</StyledTableCell>
										<StyledTableCell align="center">
											{item.comment}
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
							placeholder="Profile"
							name="commentProfile"
							onChange={(e) => handleChange(e)}
						/>

						<input
							placeholder="User"
							name="commentUser"
							onChange={(e) => handleChange(e)}
						/>
						<input
							placeholder="Comment"
							name="comment"
							onChange={(e) => handleChange(e)}
						/>

						<div className="btns">
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

export default Comments;
