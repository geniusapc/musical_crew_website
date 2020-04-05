import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
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
		width: "auto",
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
		// if (
		// 	event &&
		// 	event.type === "keydown" &&
		// 	((event as React.KeyboardEvent).key === "Tab" ||
		// 		(event as React.KeyboardEvent).key === "Shift")
		// ) {
		// 	return;
		// }

		// setState(anchor===open);
	};

	const list = (anchor: Anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "left",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			{/* <List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List> */}
			<ul>
				<Link to="admin/galleries">
					<li>Galleryxkcsjxkajskxjksaxjk</li>
				</Link>
			</ul>
			<Divider />
			{/* <List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List> */}
		</div>
	);

	return (
		<div style={{ background: "white", color: "black" }}>
			<div key={"left"}>
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
