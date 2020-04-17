import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import AdminViews from "./AdminViews";

interface Props {
	close: boolean;
}

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "200%",
	},
});

type Anchor = "left";

const AdminPage: React.FC<Props> = () => {
	const classes = useStyles();
	const [state, setState] = React.useState<boolean>(false);

	const toggleDrawer = (anchor: Anchor, open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		setState(!state);
	};

	const list = (anchor: Anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "left",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<ul className='admin-nav'>
				<Link className='admin-nav-list' to="admin/galleries">
					<li>All Music Posts</li>
				</Link>
				<Divider />
				<Link className='admin-nav-list' to="admin/galleries">
					<li>About Page</li>
				</Link>
				<Divider />
				<Link className='admin-nav-list' to="admin/galleries">
					<li>Events</li>
				</Link>
				<Divider />
				<Link className='admin-nav-list' to="admin/galleries">
					<li>Users Portal</li>
				</Link>
				<Divider />
				<Link className='admin-nav-list' to="admin/galleries">
					<li>Subscribers</li>
				</Link>
				<Divider />
				<Link className='admin-nav-list' to="admin/galleries">
					<li>Gallery</li>
				</Link>
				<Divider />
			</ul>
		</div>
	);

	return (
		<div className="admin" style={{ background: "white", color: "black" }}>
			<div key={"left"} className="menu-btn" >
				<Button onClick={toggleDrawer("left", true)}>
					<MenuIcon color="primary" fontSize="large" />
				</Button>
				<SwipeableDrawer
					anchor={"left"}
					open={state}
					onClose={toggleDrawer("left", false)}
					onOpen={toggleDrawer("left", true)}>
					{list("left")}
				</SwipeableDrawer>
			</div>
			<AdminViews />
		</div>
	);
};

export default AdminPage;
