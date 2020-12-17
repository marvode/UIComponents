import React, { useState } from "react";

import InputAddon from "./inputAddon";

const ToggleButton = ({ text, onClick }) => {
	return (
		<button
			className="p-1 mr-5 text-white bg-gray-400 rounded focus:outline-none "
			onClick={onClick}
		>
			{text}
		</button>
	);
};

const PasswordInput = () => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<InputAddon
			classes="rounded"
			label="Password Visibility Toggler"
			placeholder="Password Visibility Toggler"
			id="password"
			type={show ? "text" : "password"}
			left={
				<svg
					class="h-6 w-6"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
			}
			right={
				<ToggleButton
					text={show ? "Hide" : "Show"}
					onClick={handleClick}
				/>
			}
		/>
	);
};

export default PasswordInput;
