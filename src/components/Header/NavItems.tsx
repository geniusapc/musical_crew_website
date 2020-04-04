import React from "react";
import NavItem from "./NavItem";


const NavItems: React.FC= () => {
	return (
		<>
			<NavItem link={"#about"} text={"ABOUT"}  />
			<NavItem link={"#sectionA"} text={"DOWNLOADS"} />
			{/* <NavItem link={"wwww.test.com"} text={"Downloads"} /> */}
		</>
	);
};

export default NavItems;
