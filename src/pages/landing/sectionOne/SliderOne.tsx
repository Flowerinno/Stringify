import React from "react";
import "./SliderOne.css";
import { motion } from "framer-motion";
import { vinylsData } from "./data";
const SliderOne = () => {
	return (
		<div className="sliderOne-container">
			<motion.div className="sliderOne-slider">
				{vinylsData.map(({ img }, i) => {
					return <img key={i} src={img} alt="slides" />;
				})}
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: -50 }}
				transition={{ duration: 1.5 }}
				className="sliderOne-text"
			>
				.Make your life better by listening to some good music
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{
					opacity: 1,
					y: -50,
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
				}}
				transition={{ duration: 1.5 }}
				style={{ fontSize: "5rem" }}
			>
				<a href="#section-two">↓</a>
			</motion.div>
		</div>
	);
};

export default SliderOne;
