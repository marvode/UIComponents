import React from "react";

export const Input = ({ left, right, classes, ...rest }) => {
	const commonClass = `w-full py-2 text-sm placeholder-gray-500 border border-gray-300 sm:text-base focus:border-blue-400 focus:outline-none ${classes}`;

	if (left !== "" && right !== "") {
		return (
			<div className="relative">
				<div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
					{left}
				</div>
				<input className={`px-10 ${commonClass}`} {...rest} />
				<div className="absolute top-0 right-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
					{right}
				</div>
			</div>
		);
	}
	if (left !== "") {
		return (
			<div className="relative">
				<div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
					{left}
				</div>
				<input className={`pl-10 pr-4 ${commonClass}`} {...rest} />
			</div>
		);
	}
	if (right !== "") {
		return (
			<div className="relative">
				<input className={`pl-2 pr-10 ${commonClass}`} {...rest} />
				<div className="absolute top-0 right-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
					{right}
				</div>
			</div>
		);
	}
};

const InputAddon = ({ label, id, classes, left = "", right = "", ...rest }) => {
	return (
		<>
			<div className="flex flex-col mb-6">
				<label
					htmlFor={id}
					className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
				>
					{label}
				</label>
				<Input
					id={id}
					classes={classes}
					left={left}
					right={right}
					{...rest}
				/>
			</div>
		</>
	);
};

export default InputAddon;
