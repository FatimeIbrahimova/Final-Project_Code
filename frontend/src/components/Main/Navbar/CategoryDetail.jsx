import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryDetail.scss";

const CategoryDetail = () => {
	const [categories, setCategories] = useState({});
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8080/categories/${id}`)
			.then((res) => setCategories(res.data));
	}, [id]);

	return (
		<div className="category">
			<div className="container makeup-wrapper">
				<div className="makeup">
					<div className="makeup-img">
						<img src={categories.exampleImg} alt="img" style={{ width: 300 }} />
					</div>
				<div>
        <h2>{categories.categoryName}</h2>
				<p>{categories.categoryDesc}</p>
        </div>
				</div>
			</div>
		</div>
	);
};

export default CategoryDetail;
