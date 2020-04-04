import React, { useState } from "react";
import NavItems from "../Header/NavItems";
import Logo from "../Header/Logo";
import Hamburger from "./Hamburger";
import SearchRounded from "@material-ui/icons/SearchRounded";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";


interface Props {
	
}

const Header: React.FC<Props> = () => {
	const [displaySearch, setDisplaySearch] = useState(true);
	const openedSearchBox = () => setDisplaySearch(!displaySearch);
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen);
	};

	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<div className="header">
			<div className="header-logo">
				<Logo />
			</div>
			<Hamburger />
			<div className="header-nav">
				<NavItems />
				<span
					style={{
						margin: "-.2rem  0 0 0",
						color: "white",
						
					}}>
					<Button
						color="inherit"
						ref={anchorRef}
						aria-controls={open ? "menu-list-grow" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}>
						<span style={{ fontSize: ".9rem" }}>Toggle Menu Grow</span>
					</Button>
					<Popper
						open={open}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === "bottom" ? "center top" : "center bottom"
								}}>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList
											autoFocusItem={open}
											id="menu-list-grow"
											onKeyDown={handleListKeyDown}>
											<Link className="red" to="/login">
												<MenuItem 
												 color="primary"
												 onClick={handleClose}>LOGIN</MenuItem>
											</Link>
											<Link className="red" to="/create-account">
												<MenuItem 
												 color="primary"
												 onClick={handleClose}>REGISTER</MenuItem>
											</Link>
											<Link className="red"  to="/contact-us">
												<MenuItem 
												 color="primary"
												 onClick={handleClose}>CONTACT US</MenuItem>
											</Link>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</span>
			</div>
			<div className="small-btn" onClick={openedSearchBox}>
				<SearchRounded
					className={displaySearch ? "show" : "close"}
					fontSize="large"
				/>
			</div>
			<div
				className={
					displaySearch ? "show-search header-search" : "header-search"
				}>
				<input type="text" placeholder="search for songs..." />
				<span>SEARCH</span>{" "}
			</div>
		</div>
	);
};

export default Header;
