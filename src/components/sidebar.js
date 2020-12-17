import React from "react";
import SectionHeading from "./sectionHeading";
import SidebarItem from "./sidebarItem";

const sidebar = () => {
	return (
		<div className="fixed z-40 min-h-screen bg-white">
			<div className="flex flex-col w-56 overflow-hidden mt-28">
				<ul className="flex flex-col py-4 border-b">
					<SidebarItem linkName="Dashboard" linkUrl="/" />
				</ul>

				<SectionHeading title="form" />
				<ul>
					<SidebarItem linkUrl="/button" linkName="Buttons" />
					<SidebarItem linkUrl="/input" linkName="Input" />
				</ul>
			</div>
		</div>
	);
};

export default sidebar;
