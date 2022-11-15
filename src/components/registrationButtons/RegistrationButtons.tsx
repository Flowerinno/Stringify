import React from "react";
import { Link } from "react-router-dom";
import "./RegistrationButtons.css";
const RegistrationButtons = () => {
	return (
		<div className="regButtons">
			<button>Sign in</button>
			<button>Sign up</button>
		</div>
	);
};

export default RegistrationButtons;
