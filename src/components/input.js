import React from "react";

const Input = ({ classes, id, label, ...rest }) => {
	return (
		<div>
			{label ? (
				<label className="text-sm" htnlFor={id}>
					{label}
				</label>
			) : (
				""
			)}
			<input
				className={`block w-full py-1 px-2 mb-1 text-base leading-normal focus:outline-none transition duration-300 border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-200 ${classes}`}
				id={id}
				{...rest}
			/>
		</div>
	);
};

export default Input;
