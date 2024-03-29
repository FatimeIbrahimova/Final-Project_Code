import React, { useContext } from "react";
import { MainContext } from "../../../../context/ContextProvider";
import "./CategoryDetail.scss";

const EditorialCategory = () => {
	const { categories } = useContext(MainContext);

	return (
		<div className="category">
			<div className="container makeup-wrapper">
				{categories &&
					categories
						.filter((item) => {
							return item.category.toLowerCase() === "editorial"
								? item
								: item.category.toLowerCase().includes("editorial");
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

export default EditorialCategory;
