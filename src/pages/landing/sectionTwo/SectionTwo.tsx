import React from "react";
import "./SectionTwo.css";
import { motion } from "framer-motion";

import { SlideShow } from "./animate/SlideShow";
const SectionTwo = () => {
	return (
		<div className="sectionTwo-container">
			<motion.a
				initial={{ opacity: 0, y: 0 }}
				whileInView={{
					opacity: 1,
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
				}}
				transition={{ duration: 1.5 }}
				style={{ fontSize: "6rem" }}
				href="#section-one"
				id="arrow"
			>
				↑
			</motion.a>
			<motion.div className="sectionTwo-main">
				<motion.div
					className="sectionTwo-main_left"
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, bounce: 0.5 }}
				>
					<h2>
						The four building blocks of the universe are fire, water, gravel and
						vinyl
						<br />
						<strong style={{ color: "white" }}>Dane Barry -</strong>
					</h2>
				</motion.div>
				<div className="sectionTwo-main_right">
					<SlideShow />
				</div>
			</motion.div>
			<motion.a
				initial={{ opacity: 0, y: 0 }}
				whileInView={{
					opacity: 1,
					y: -50,
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
				}}
				transition={{ duration: 1.5 }}
				style={{ fontSize: "6rem", display: "flex", alignItems: "center" }}
				href="#section-three"
				id="arrow"
			>
				↓
			</motion.a>
		</div>
	);
};

export default SectionTwo;
