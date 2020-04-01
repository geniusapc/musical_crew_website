import React,{useState} from "react";
import NavItems from "../Header/NavItems";
import Logo from "../Header/Logo";
import Hamburger from "./Hamburger";
import SearchRounded  from "@material-ui/icons/SearchRounded";

interface Props {
	// displaySearch:Boolean;
	// openedSearchBox:
	// onclick: () => void;
	// DetailedHTMLProps<HTMLAttributes><HTMLDivElement> :() => void;
}

const Header: React.FC<Props> = () => {
	const [displaySearch,setDisplaySearch] = useState(true);
	const openedSearchBox  = ()=>(setDisplaySearch(!displaySearch),console.log(displaySearch)
	)
	return (
		<div className="header">
			<div className="header-logo">
				<Logo />
			</div>
			<Hamburger />
			<div className="header-nav">
				<NavItems />
			</div>
			<div className="small-btn" onClick={openedSearchBox}>
			<SearchRounded className={displaySearch? "show": "close"} fontSize="large" />
			</div>
			<div className={displaySearch?"show-search header-search": "header-search"}>
				<input type="text" placeholder="search for songs..." />
				<span>SEARCH</span>{" "}
			</div>
		</div>
	);
};

export default Header;
