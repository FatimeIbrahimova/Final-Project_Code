import React from "react";
import "./DashBoard.scss";
import { Helmet } from "react-helmet";

const DashBoard = () => {
	return (
		<>
			<Helmet>
				<title>Admin Page</title>
			</Helmet>
			<div className="dashboard">
				<img
					src="https://t3.ftcdn.net/jpg/03/21/99/92/240_F_321999244_kLDfk7mlGQc2zpz1NM91IeTdQfjuKD0u.jpg"
					alt="img"
				/>
			</div>
		</>
	);
};

export default DashBoard;
