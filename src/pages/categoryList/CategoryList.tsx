import React from "react";
import { useParams } from "react-router-dom";
const CategoryList = () => {
	const { category } = useParams<string>();
	return <div>{category?.toLowerCase()} music</div>;
};

export default CategoryList;
