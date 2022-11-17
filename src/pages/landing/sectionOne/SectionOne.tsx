import React from "react";
import "./SectionOne.css";
import { motion } from "framer-motion";
import { vinylsData } from "./data";
const SectionOne = () => {
	return (
		<div className="sliderOne-container">
			<motion.div
				className="sliderOne-slider"
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				{vinylsData.map(({ img }, i) => {
					return <img key={i} src={img} alt="slides" />;
				})}
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1, y: -50 }}
				transition={{ duration: 1.5 }}
				className="sliderOne-text"
			>
				Make your life better by listening to some good music
			</motion.div>
			<motion.a
				initial={{ opacity: 0, y: 0 }}
				whileInView={{
					opacity: 1,
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
				}}
				transition={{ duration: 1.5 }}
				style={{
					fontSize: "6rem",
					width: "max-content",
					margin: "0 auto",
				}}
				href="#section-two"
				id="arrow"
			>
				↓
			</motion.a>
		</div>
	);
};

export default SectionOne;
