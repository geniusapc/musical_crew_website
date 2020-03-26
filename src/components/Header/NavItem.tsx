import React from "react";

interface Props {
	text: string;
	link: string;
	icons?: string;
}

const NavItem: React.FC<Props> = ({ text, link, icons }) => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<a href={link}>{text}</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavItem;
