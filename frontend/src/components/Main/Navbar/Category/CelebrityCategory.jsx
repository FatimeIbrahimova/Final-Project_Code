import React, { useContext } from "react";
import { MainContext } from "../../../../context/ContextProvider";
import "./CategoryDetail.scss";

const CelebrityCategory = () => {
	const {categories}=useContext(MainContext)

	return (
		<div className="category">
			<div className="container makeup-wrapper">
				{categories && categories
				.filter((item)=>{
					return item.category.toLowerCase()==="celebrity" ? item : item.category.toLowerCase().includes("celebrity")
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

export default CelebrityCategory;