import React from "react";
import NavItems from "../Header/NavItems";
import Logo from "../Header/Logo";
import Hamburger from "./Hamburger";

// interface Props {}

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header-logo">
				<Logo />
			</div>
			<Hamburger/>
			<div className="header-nav">
				<NavItems />
			</div>
			{/* <div className="header-search">
				<input type="text" placeholder="search for songs..." />
				<span>SEARCH</span>{" "}
			</div> */}
		</div>
	);
};

export default Header;
