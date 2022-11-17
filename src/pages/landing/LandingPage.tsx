import React, { useRef } from "react";
import "./LandingPage.css";
import { motion } from "framer-motion";
import RegistrationButtons from "../../components/registrationButtons/RegistrationButtons";
import Logo from "../../components/logo/Logo";
import SectionTwo from "./sectionTwo/SectionTwo";
import SectionOne from "./sectionOne/SectionOne";

const LandingPage = () => {
	const ref = useRef(null);

	return (
		<div className="landingPage-container" dir="rtl">
			<div className="section-one" id="section-one">
				<div className="section-one_header">
					<Logo />
					<motion.div className="landing-regButtons">
						<RegistrationButtons />
					</motion.div>
				</div>

				{/* <motion.div
					className="section-one_slider"
					initial={{ opacity: 0 }}
					transition={{ duration: 1.5 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					ref={ref}
				> */}
				<SectionOne />
				{/* </motion.div> */}
			</div>
			<div className="section-two" id="section-two">
				<SectionTwo />
			</div>
			<div className="section-three" id="section-three"></div>
			<div className="section-four" id="section-four"></div>
		</div>
	);
};

export default LandingPage;
