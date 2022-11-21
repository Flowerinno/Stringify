import React from "react";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./pages/categoryList/CategoryList";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path='/:category' element={<CategoryList />} />
			</Routes>
		</div>
	);
}

export default App;
