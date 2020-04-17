import React from "react";
import NavItem from "./NavItem";


const NavItems: React.FC = () => {
	return (
		<>
			<NavItem link={"/#about"} text={"ABOUT"} />
			<NavItem link={"/#sectionA"} text={"DOWNLOADS"} />
			<NavItem link={"/#events"} text={"EVENTS"} />
		</>
	);
};

export default NavItems;
