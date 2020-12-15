import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ linkName, linkUrl }) => {
	return (
		<li>
			<Link
				to={linkUrl}
				className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:bg-gray-100 hover:text-gray-800"
			>
				<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
					<i className="bx bx-home"></i>
				</span>
				<span className="text-sm font-medium">{linkName}</span>
			</Link>
		</li>
	);
};

export default SidebarItem;
