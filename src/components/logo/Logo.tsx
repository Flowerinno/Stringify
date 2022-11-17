import React from "react";
import "./Logo.css";
import { motion } from "framer-motion";
const Logo = () => {
	return (
		<motion.div className="logo">
			<a href="#section-one">
				<h1>Stringify</h1>
			</a>
		</motion.div>
	);
};

export default Logo;
