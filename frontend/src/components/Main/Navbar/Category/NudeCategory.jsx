import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../../context/ContextProvider";
import "./CategoryDetail.scss";

const NudeCategory = () => {
	const { categories, setCategories } = useContext(MainContext);

	return (
		<div className="category">
			<div className="container makeup-wrapper">
				{categories &&
					categories
						.filter((item) => {
							return item.category.toLowerCase() === "nude"
								? item
								: item.category.toLowerCase().includes("nude");
						})
						.map((item, index) => (
							<div className="makeup" key={index}>
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

export default NudeCategory;
