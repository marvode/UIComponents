import React from "react";
import Input from "../components/input";
import InputAddon from "../components/inputAddon";
import PasswordInput from "../components/passwordInput";

const InputPage = () => {
	return (
		<div className="space-y-4">
			<div className="w-1/2">
				<Input placeholder="Input" classes="" />
			</div>
			<div className="w-1/2">
				<Input placeholder="Rounded Corner Input" classes="" />
			</div>
			<div className="w-1/2">
				<Input
					disabled
					placeholder="Disabled Input"
					classes="rounded"
				/>
			</div>

			<div className="w-1/2">
				<InputAddon
					placeholder="Right Input Addon"
					label="Right Input Addon"
					right={
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
					}
				/>
			</div>
			<div className="w-1/2">
				<InputAddon
					placeholder="Left Input Addon"
					label="Left Input Addon"
					left={
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
					}
				/>
			</div>

			<div className="w-1/2">
				<InputAddon
					classes="rounded"
					placeholder="Left and Right Input Addon"
					label="Left and Right Input Addon Rounded Corners"
					left={
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
					}
					right={
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
					}
				/>
			</div>

			<div className="w-1/2">
				<PasswordInput
					classes="rounded"
					label="Password Input with visibility toggle"
					placeholder="Password Input with visibility toggle"
				/>
			</div>
		</div>
	);
};

export default InputPage;
