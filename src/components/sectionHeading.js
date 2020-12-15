import React from "react";

const SectionHeading = ({ title }) => {
	return (
		<div className="flex items-center pt-10">
			<span className="w-8"></span>
			<h3 className="font-semibold text-gray-600 capitalize">{title}</h3>
		</div>
	);
};

export default SectionHeading;
