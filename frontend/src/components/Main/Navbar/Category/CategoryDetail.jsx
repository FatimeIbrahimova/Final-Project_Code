import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../../../context/ContextProvider";
import "./CategoryDetail.scss";

const CategoryDetail = () => {
	// const [categories, setCategories] = useState({});
	// const { id } = useParams();
	// useEffect(() => {
	// 	axios
	// 		.get(`http://localhost:8080/categories/${id}`)
	// 		.then((res) => setCategories(res.data));
	// }, [id]);
	const {categories,setCategories}=useContext(MainContext)

	return (
		<div className="category">
			<div className="container makeup-wrapper">
				{categories && categories
				.filter((item)=>{
					return item.category.toLowerCase()==="hd" ? item : item.category.toLowerCase().includes("hd")
				})
				.map((item)=>(
					<div className="makeup">
					<div className="makeup-img">
						<img src={item.exampleImg} alt="img" style={{ width: 300 }} />
					</div>
					<div>
						<h2>{item.categoryName}</h2>
						<p>{item.categoryDesc}</p>
					</div>
				</div>
				))}
			</div>
		</div>
	);
};

export default CategoryDetail;
