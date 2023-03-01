import React, { useEffect, useState } from "react";
import "./FirstSection.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../../../components/Admin/Loading/Loading";

const FirstSection = () => {
	const [loading, setLoading] = useState(true);
	//api
	const [slider, setSlider] = useState([]);

	const getData = async () => {
		const res = await axios.get("http://localhost:8080/slider");
		setSlider(res.data);
		setLoading(false);
	};
	useEffect(() => {
		getData();
	}, []);
	//
	const [btn, setBtn] = useState(false);
	const [demos, setDemos] = useState("hidden");
	const [close, setClose] = useState(false);

	const handleClick = () => {
		if (!btn) {
			setDemos("visible");
		} else {
			setDemos("hidden");
		}
	};
	const handleClose = () => {
		if (!close) {
			setDemos("hidden");
		}
	};
	return (
		<>
			<div className="first-section">
				<div className="container">
					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{ clickable: true }}
						navigation
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						{loading ? (
							<Loading />
						) : (
							<>
								{slider &&
									slider.map((product, index) => (
										<SwiperSlide key={index}>
											<div>
												<div className="first-section__swipper-img">
													<img src={product.url} alt="img" />
												</div>
												<div className="first-section__swipper-desc">
													<h2>{product.title}</h2>
													<p>{product.desc}</p>
													<button className="first-section__swipper-desc-btn">
														<Link to={`${product._id}`}>Read More</Link>
													</button>
												</div>
											</div>
										</SwiperSlide>
									))}
							</>
						)}
					</Swiper>
				</div>
				<button className="demos-btn" onClick={() => handleClick()}>
					<h2>Demos</h2>
				</button>
				<div className={demos}>
					<div className="demos">
						<div className="demos-container">
							<div className="demos-top">
								<div>
									<h2>Explore other Demos</h2>
								</div>
								<div>
									<i
										className="fa-solid fa-xmark"
										onClick={() => handleClose()}
									></i>
								</div>
							</div>
							<div className="demos-cards">
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/c356151f4f995382ea66a6fe3389347c/96037/tinder.png"
											alt="img"
										/>
									</div>
									<div>
										<h4>Romantic Blog</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<a href="http://localhost:3000/">
											<img
												src="https://storyhub-beauty-redq.vercel.app/static/a52f7a865903bb11c3d1ab3b3d3e40b6/49df2/beauty.jpg"
												alt="img"
											/>
										</a>
									</div>
									<div>
										<h4>Beauty Blog</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/9e5efc17c05f2de6fb1a18ff4e0cd46a/49df2/modern-agency.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Modern Agency Blog</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/f02f91e719fa52db3cae0170327f37bb/49df2/lite.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Personal Blog Lite</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/a83629e9b3b488b610620cc15acea195/49df2/minimal-photography.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Minimal Photography</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/85cce8873f65aef1fdbf7a3e5fa54331/49df2/image.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Image Blog</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/9a38c8a36976bc44b703e396d81b4fdf/49df2/personal.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Personal Blog</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/1bf07eba68976dc4a4e0e05eb898ef38/49df2/agency.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Agency Blog</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/cbcb42935fe0bd58cf86e8fc8c8ddcea/49df2/minimal.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Personal Blog Minimal</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/93566b8e9a29c782a3934c45c3b24614/49df2/single-sidebar.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Blog Sidebar</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/cbcb42935fe0bd58cf86e8fc8c8ddcea/49df2/minimal.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Blog Details</h4>
									</div>
								</div>
								<div className="demos-cards_wrapper">
									<div className="demos-cards_card">
										<img
											src="https://storyhub-beauty-redq.vercel.app/static/a48da9b0b0b2b2e41839c8fa00676c42/49df2/single2.jpg"
											alt="img"
										/>
									</div>
									<div>
										<h4>Blog Details v2</h4>
									</div>
								</div>
							</div>
							<button>Purchase Now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FirstSection;
