import React, { useRef } from "react";
import "./LandingPage.css";
import { motion, useInView } from "framer-motion";
import RegistrationButtons from "../../components/registrationButtons/RegistrationButtons";
import Logo from "../../components/logo/Logo";
import SliderOne from "./sectionOne/SliderOne";

const LandingPage = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<div className="landingPage-container" dir="rtl">
			<div className="section-one">
				<div className="section-one_header">
					<Logo />
					<motion.div className="landing-regButtons">
						<RegistrationButtons />
					</motion.div>
				</div>

				<motion.div
					className="section-one_slider"
					initial={{ opacity: 0 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					ref={ref}
				>
					<SliderOne />
				</motion.div>
			</div>
			<div className="section-two" id="section-two"></div>
			<div className="section-three"></div>
			<div className="section-four"></div>
		</div>
	);
};

export default LandingPage;
