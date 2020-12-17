import React from "react";

const InputElement = () => {
	return (
		<div>
			<label className="text-sm text-gray-400">Full name</label>
			<div className="inline-flex w-full border">
				<div className="w-1/12 pt-2 bg-gray-100">
					<svg
						fill="none"
						className="w-6 mx-auto text-gray-400"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</div>
				<input
					type="text"
					className="w-11/12 p-2 focus:outline-none focus:text-gray-600"
					placeholder="Charly Olivas"
				/>
			</div>
		</div>
	);
};

export default InputElement;
