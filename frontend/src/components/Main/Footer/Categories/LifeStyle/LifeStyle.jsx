import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../../../context/ContextProvider";
import "../Beauty/Beauty.scss";

const LifeStyle = () => {
	const { filter} = useContext(MainContext);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<>
			<div className="category">
				<div className="container">
					<div className="category-title">
						<h1>lifestyle</h1>
						<p>A collection of post</p>
					</div>
					<hr />
					<div className="second-section__products">
						{filter &&
							filter
								.filter((data) => {
									console.log(data.count);
									return data.name.toLowerCase() === "lifestyle"
										? data
										: data.name.toLowerCase().includes("lifestyle");
								})
								.map((product, index) => (
									<div className="second-section__products-first" key={index}>
										<img src={product.url} alt="img" />
										<div className="second-section__products-first_desc">
											<h2>{product.title}</h2>
											<p>{product.desc}</p>
											<button className="second-section__products-first_desc-btn">
												<a href={`${product._id}`}>Read More</a>
											</button>
										</div>
									</div>
								))}
					</div>
				</div>
			</div>
		</>
	);
};

export default LifeStyle;
