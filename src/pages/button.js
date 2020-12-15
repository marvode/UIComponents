import React from "react";
import Btn from "../components/btn";

const Button = () => {
	return (
		<div className="space-y-4">
			<div>
				<Btn classes="text-white bg-blue-600 rounded hover:bg-blue-700">
					Regular
				</Btn>
			</div>
			<div>
				<Btn classes="text-white bg-yellow-600 rounded-full hover:bg-yellow-700">
					Rounded
				</Btn>
			</div>
			<div>
				<Btn classes="text-blue-600 border-2 border-blue-600 bg-transparent hover:bg-blue-100">
					Outline
				</Btn>
			</div>
			<div>
				<Btn classes="text-yellow-600 border-2 rounded-full border-yellow-600 bg-white hover:bg-yellow-100">
					Outline Rounded
				</Btn>
			</div>
			<div>
				<Btn
					circle
					classes="text-white bg-blue-700 rounded-full ripple hover:bg-blue-800"
				>
					<svg
						className="w-5 h-5 text-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
							clipRule="evenodd"
						/>
					</svg>
				</Btn>
			</div>
			<div>
				<Btn classes="bg-black text-white rounded">
					<svg
						className="w-5 h-5 text-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
				</Btn>
			</div>
			<div className="w-1/3">
				<Btn classes="w-full px-6 py-2 text-white transition bg-pink-500 rounded hover:bg-pink-600">
					Secondary
				</Btn>
			</div>
			{/* <button className="border-blue"></button> */}
		</div>
	);
};

export default Button;
