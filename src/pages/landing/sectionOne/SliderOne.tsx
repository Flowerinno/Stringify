import React from "react";
import "./SliderOne.css";
import { motion } from "framer-motion";
const SliderOne = () => {
	return (
		<>
			<motion.div className="sliderOne">
				<ul>
					{[1, 2, 3, 4, 5].map((char, i) => {
						return <li key={i}>{char}</li>;
					})}
				</ul>
			</motion.div>
			<p>Make your life better by listening to some good music</p>
		</>
	);
};

export default SliderOne;
