import React from "react";
// import NavbarItem from "./navbarItem";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

const Navbar = () => {
	return (
		<div className="fixed w-screen z-50 bg-white shadow-xs">
			<div className="container flex flex-row items-center justify-between py-2 md:mx-auto">
				<Link to="/" className="flex ml-8 text-lg text-gray-700">
					<img src={logo} className="w-20" alt="logo" />
				</Link>
				<span className="flex w-screen h-10 text-sm bg-gray-200 border border-gray-300 rounded-full cursor-pointer md:w-1/3">
					<input
						type="search"
						name="search"
						placeholder="Search"
						className="flex-grow px-4 text-sm rounded-l-full rounded-r-full focus:outline-none"
					/>
					<i className="w-4 h-4 m-3 mr-5 text-lg text-gray-700 fas fa-search"></i>
				</span>
				<div className="flex flex-row-reverse ml-4 mr-4 md:hidden">
					<i className="fas fa-bars"></i>
				</div>
				<div className="flex flex-row-reverse mr-8 md:flex"></div>
			</div>
		</div>
	);
};

export default Navbar;
