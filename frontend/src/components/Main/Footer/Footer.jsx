import React, { useContext, useEffect, useState } from "react";
import "./Footer.scss";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import { MainContext } from "../../../context/ContextProvider";
import { NavLink } from "react-router-dom";

const Footer = () => {
	const { insta, setInsta } = useContext(MainContext);

	const getData = async () => {
		const res = await axios.get("http://localhost:8080/insta");
		setInsta(res.data);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<ScrollToTop
				smooth
				top="200"
				color="white"
				style={{ backgroundColor: "#f73b98", borderRadius: "50%" }}
			/>
			<div className="footer">
				<div className="container">
					<div className="footer-top">
						<div className="footer-top_desc">
							<i className="fa-brands fa-instagram" />
							<h2>Me On Instagram</h2>
						</div>
						<div className="footer-top_imgs">
							{insta &&
								insta.map((data, index) => (
									<div className="footer-top_imgs_image" key={index}>
										<img src={data.url} alt="img" />
										<div className="footer-top_imgs_image-desc">
											<span>
												<i className="fa-solid fa-heart"></i>
												{data.like} <i className="fa-solid fa-comment"></i>
												{data.comment}
											</span>
										</div>
									</div>
								))}
						</div>
					</div>
					<div className="footer-middle">
						<p>Subscribe to our newsletter and stay updated.</p>
						<form>
							<input placeholder="Write your email here" />
							<button className="footer-middle_btn-subscribe">Subscribe</button>
						</form>
					</div>
					<div className="footer-end">
						<div className="footer-end_desc">
							<img
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDguMDk2IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTQ4LjA5NiAzMCI+CiAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NjIuODUgLTYyMy4yMSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMTM1MjkiIGRhdGEtbmFtZT0iUGF0aCAxMzUyOSIgZD0iTTc4MC41MjIsNjI5LjQwN2wtNC42NTYsMS4zMTJhMy41NzYsMy41NzYsMCwwLDAtMS4wODItMkEzLjc5LDMuNzksMCwwLDAsNzcyLDYyNy44YTMuNDYzLDMuNDYzLDAsMCwwLTIuMjk1LjczNywyLjIyLDIuMjIsMCwwLDAtLjg4NSwxLjc1NHEwLDEuOCwyLjI5NSwyLjIzbDMuMTE1LjU5YTguNiw4LjYsMCwwLDEsNC45NjcsMi41MDgsNi40MjcsNi40MjcsMCwwLDEsMS43NTQsNC40NzYsNi44ODEsNi44ODEsMCwwLDEtMi4zMjgsNS4xMzEsOC43MTQsOC43MTQsMCwwLDEtNi4yNjIsMi4yMTMsOS41MTEsOS41MTEsMCwwLDEtNi44LTIuMjc5QTguMTM4LDguMTM4LDAsMCwxLDc2Mi44NSw2NDBsNC43NTQtMS4xNDdhNC4zNjksNC4zNjksMCwwLDAsMS4zNiwyLjg2OSw0Ljg0OSw0Ljg0OSwwLDAsMCwzLjQ1OSwxLjEzMSwzLjg2NywzLjg2NywwLDAsMCwyLjM5NC0uNjcyLDIuMSwyLjEsMCwwLDAsLjg4NS0xLjc1NCwxLjk1MiwxLjk1MiwwLDAsMC0uNjU2LTEuNDkyLDMuNjgsMy42OCwwLDAsMC0xLjgzNi0uODM2bC0zLjE4LS41OWE4LjE0LDguMTQsMCwwLDEtNC42MzktMi4zOTQsNi4zMDYsNi4zMDYsMCwwLDEtMS42ODktNC40MjYsNi43NzksNi43NzksMCwwLDEsMi40NTktNS4zNDQsOC42NjQsOC42NjQsMCwwLDEsNS44NjktMi4xMzIsMTEuMDQzLDExLjA0MywwLDAsMSwzLjY4OS41NzQsNi43NjYsNi43NjYsMCwwLDEsMi41NzMsMS41MjUsOC4zNzYsOC4zNzYsMCwwLDEsMS40OTIsMS45NjdBNy4xNDgsNy4xNDgsMCwwLDEsNzgwLjUyMiw2MjkuNDA3WiIgZmlsbD0iIzI5MjkyOSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTM1MzAiIGRhdGEtbmFtZT0iUGF0aCAxMzUzMCIgZD0iTTc5MC41NTQsNjI1Ljl2NC43NTRoMy4xOHY0LjM2MWgtMy4xOHY2LjFxMCwxLjcwNiwxLjgsMS43MDVhNS45MjUsNS45MjUsMCwwLDAsMS4zMTItLjE2NHY0LjEzMWE1LjkxMSw1LjkxMSwwLDAsMS0yLjU5LjQ1OSw1LjQ4NSw1LjQ4NSwwLDAsMS0zLjk4NC0xLjQxQTUuMDgyLDUuMDgyLDAsMCwxLDc4NS42MzYsNjQydi02Ljk4M2gtMi44ODV2LTQuMzYxaC44MTlhMi4zNjEsMi4zNjEsMCwwLDAsMS44ODYtLjczOCwyLjgyMywyLjgyMywwLDAsMCwuNjM5LTEuOTE4di0yLjFaIiBmaWxsPSIjMjkyOTI5Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8xMzUzMSIgZGF0YS1uYW1lPSJQYXRoIDEzNTMxIiBkPSJNODA0LjU1NCw2MzAuMTYxYTguNDc4LDguNDc4LDAsMCwxLDYuMTgsMi40MjYsOS4wMTMsOS4wMTMsMCwwLDEsMCwxMi40MSw5LDksMCwwLDEtMTIuMzQ0LS4wMTYsOC45Myw4LjkzLDAsMCwxLDAtMTIuMzc3QTguNDYyLDguNDYyLDAsMCwxLDgwNC41NTQsNjMwLjE2MVptMCwxMi42ODlhMy41NzQsMy41NzQsMCwwLDAsMi42MDYtMS4wNDksNC4wNDksNC4wNDksMCwwLDAsMS4wNjYtMy4wMTcsMy45OTIsMy45OTIsMCwwLDAtMS4wNjYtMywzLjc2MSwzLjc2MSwwLDAsMC01LjIuMDE3LDMuOTYxLDMuOTYxLDAsMCwwLTEuMDgyLDIuOTgzLDQuMDE3LDQuMDE3LDAsMCwwLDEuMDgyLDNBMy41NTcsMy41NTcsMCwwLDAsODA0LjU1NCw2NDIuODVaIiBmaWxsPSIjMjkyOTI5Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8xMzUzMiIgZGF0YS1uYW1lPSJQYXRoIDEzNTMyIiBkPSJNODI2Ljc4Myw2MzAuNjUzdjQuOTE4YTYuODM1LDYuODM1LDAsMCwwLTEuNTczLS4xNjQsMy42NzcsMy42NzcsMCwwLDAtMi43MzgsMS4wODIsNC42LDQuNiwwLDAsMC0xLjA2NiwzLjM0NHY3LjExNWgtNC45ODNWNjMwLjY1M2g0LjgxOXYyLjJhMy42MjYsMy42MjYsMCwwLDEsMS44LTEuOCw1Ljc3Miw1Ljc3MiwwLDAsMSwyLjQyNi0uNTU3QTQuNjg1LDQuNjg1LDAsMCwxLDgyNi43ODMsNjMwLjY1M1oiIGZpbGw9IiMyOTI5MjkiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzEzNTMzIiBkYXRhLW5hbWU9IlBhdGggMTM1MzMiIGQ9Ik04MzYuOTgsNjUzLjIxaC01LjI0NmwzLjcwNS04LjQ1OS02Ljg1My0xNC4xaDUuNTc0bDMuOTY3LDguNzIxLDMuNjA3LTguNzIxaDUuMjc5WiIgZmlsbD0iIzI5MjkyOSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTM1MzQiIGRhdGEtbmFtZT0iUGF0aCAxMzUzNCIgZD0iTTg2OS41MzcsNjQ2Ljk0OGgtNS4yMTNWNjM3LjdoLTkuMjc5djkuMjQ2aC01LjE4VjYyMy43aDUuMTh2OS4xMTVoOS4yNzlWNjIzLjdoNS4yMTNaIiBmaWxsPSIjYzQzYjcyIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xMzUzNSIgZGF0YS1uYW1lPSJQYXRoIDEzNTM1IiBkPSJNODg0Ljc0OSw2NDYuOTQ4YTcuOTczLDcuOTczLDAsMCwxLS4xMzEtMS42MzksMy42NzksMy42NzksMCwwLDEtMS44LDEuNDkyLDYuNTY3LDYuNTY3LDAsMCwxLTIuNTU3LjUwOCw1LjgzLDUuODMsMCwwLDEtNC41NDEtMS44Miw2LjQ5MSw2LjQ5MSwwLDAsMS0xLjY1Ni00LjU0MVY2MzAuNjUzaDQuOTg0VjYzOS45YTMuMDE2LDMuMDE2LDAsMCwwLC42NzIsMi4wMzMsMi40MjQsMi40MjQsMCwwLDAsMS45NTEuNzg3LDIuNjE3LDIuNjE3LDAsMCwwLDEuOTgzLS43NzEsMi43OTEsMi43OTEsMCwwLDAsLjczOC0yLjAxNnYtOS4yNzloNC45ODRWNjQ0LjAzYTIzLjcyNiwyMy43MjYsMCwwLDAsLjE2MywyLjkxOFoiIGZpbGw9IiNjNDNiNzIiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzEzNTM2IiBkYXRhLW5hbWU9IlBhdGggMTM1MzYiIGQ9Ik04OTguNTg1LDY0Ni45NDhoLTQuODE5VjYyMy4yMWg0Ljg4NXY4Ljk4NGE0LjE1Nyw0LjE1NywwLDAsMSwxLjgzNi0xLjM3Nyw3LjE2Miw3LjE2MiwwLDAsMSwyLjg4NS0uNTU3LDYuOTIxLDYuOTIxLDAsMCwxLDUuNTI1LDIuMzc3LDkuMDMxLDkuMDMxLDAsMCwxLDIuMDQ5LDYuMTE0LDguODE3LDguODE3LDAsMCwxLTIuMTgsNi4xNDgsNy4yLDcuMiwwLDAsMS01LjU5LDIuNDEsNi4xMzksNi4xMzksMCwwLDEtMi43ODctLjYwNyw0LjIzOCw0LjIzOCwwLDAsMS0xLjgtMS41OVptNy4zNzgtOC4xNjRhNC4wMjUsNC4wMjUsMCwwLDAtMS4wNS0zLDMuNTg4LDMuNTg4LDAsMCwwLTIuNjIyLTEuMDMzLDMuNjQ2LDMuNjQ2LDAsMCwwLTIuNjQsMS4wMzMsNC43MjcsNC43MjcsMCwwLDAsLjAxNiw2LDMuNiwzLjYsMCwwLDAsMi42MjQsMS4wNjYsMy41NDIsMy41NDIsMCwwLDAsMi42MDYtMS4wNjZBNC4wNTcsNC4wNTcsMCwwLDAsOTA1Ljk2Myw2MzguNzg0WiIgZmlsbD0iI2M0M2I3MiIvPgogIDwvZz4KPC9zdmc+Cg=="
								alt="img"
							/>
							<ul>
								<li>
									<span>23 King Street, 5th Avenue, New York</span>
								</li>
								<li>
									<span>+1-2345-6789-9</span>
								</li>
								<li>
									<span>
										Copyright &copy;<a href="https://redq.io">RedQ, Inc</a>.
									</span>
								</li>
							</ul>
						</div>
						<div className="footer-end_links">
							<h3>Quick Links</h3>
							<ul>
								<li>
									<NavLink to="/about">About</NavLink>
								</li>
								<li>
									<NavLink to="/contact">Contact</NavLink>
								</li>
								<li>
									<NavLink to="/notFound">404 Page</NavLink>
								</li>
							</ul>
						</div>
						<div className="footer-end_categories">
							<h3>Category</h3>
							<ul>
								<li>
									<NavLink to="/beauty">Beauty</NavLink>
								</li>
								<li>
									<NavLink to="/lifestyle">Lifestyle</NavLink>
								</li>
								<li>
									<NavLink to="/products">Products</NavLink>
								</li>
								<li>
									<NavLink to="/tips">Tips</NavLink>
								</li>
							</ul>
						</div>
						<div className="footer-end_follow">
							<h3>Follow Us</h3>
							<ul>
								<li>
									<a href="https://www.facebook.com/redqinc/">
										<i className="fa-brands fa-square-facebook" />
									</a>
								</li>
								<li>
									<a
										className="social-icon"
										href="https://www.instagram.com/redqinc/"
									>
										<i className="fa-brands fa-instagram" />
									</a>
								</li>
								<li>
									<a className="social-icon" href="https://twitter.com/redqinc">
										<i className="fa-brands fa-twitter" />
									</a>
								</li>
								<li>
									<a
										className="social-icon"
										href="https://www.linkedin.com/company/redqinc/"
									>
										<i className="fa-brands fa-linkedin" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
