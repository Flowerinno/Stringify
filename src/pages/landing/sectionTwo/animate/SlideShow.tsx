import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../data";
import "./SlideShow.css";

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
// 	return Math.abs(offset) * velocity;
// };

export const SlideShow = () => {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<div className='slideShow-container'>
			<div className="next" onClick={() => paginate(1)}>
				{"‣"}
			</div>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={images[imageIndex].toString()}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					transition={{
						opacity: { duration: 0.4 },
					}}
                    className='sliderTwo-img'
				/>
			</AnimatePresence>
			<div className="prev" onClick={() => paginate(-1)}>
				{"‣"}
			</div>
		</div>
	);
};
