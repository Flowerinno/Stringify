import React, { useRef } from "react";
import "./LandingPage.css";
import { motion } from "framer-motion";
import RegistrationButtons from "../../components/registrationButtons/RegistrationButtons";
import Logo from "../../components/logo/Logo";
import SectionTwo from "./sectionTwo/SectionTwo";
import SectionOne from "./sectionOne/SectionOne";
import SectionThree from './sectionThree/SectionThree'
import SectionFour from './sectionFour/SectionFour'
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
				<SectionOne />
			</div>
			<div className="section-two" id="section-two">
				<SectionTwo />
			</div>
			<div className="section-three" id="section-three">
			<SectionThree /> </div>
			<div className="section-four" id="section-four">
			<SectionFour /></div>
		</div>
	);
};

export default LandingPage;
