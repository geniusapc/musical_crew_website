import React from "react";
import NavItem from "./NavItem";


const NavItems: React.FC= () => {
	return (
		<>
			<NavItem link={"wwww.test.com"} text={"Home"} />
			<NavItem link={"wwww.test.com"} text={"About"} />
			<NavItem link={"wwww.test.com"} text={"Downloads"} />
			<NavItem link={"wwww.test.com"} text={"News Feed"} />
		</>
	);
};

export default NavItems;
