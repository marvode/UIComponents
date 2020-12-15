import React from "react";

const Btn = ({ classes, children, circle }) => {
	let style = `inline-block align-middle text-center transition shadow select-none font-normal focus:outline-none hover:shadow-lg whitespace-no-wrap leading-normal no-underline ${classes}`;

	circle ? (style += " p-3") : (style += " px-4 py-2");

	return <button className={style}>{children}</button>;
};
export default Btn;
