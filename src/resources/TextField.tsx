import React, { useState, useRef, useReducer } from "react";

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	fn?: (bob: string) => number;
	person?: Person;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
	text: string;
	value: number;
}

type Action = { type: "add"; text: string } | { type: "remove"; idx: number };

interface Todo {
	text: string;
	complete: boolean;
}

type State = Todo[];

const TextField: React.FC<Props> = ({ text, handleChange }) => {
	const [count, setCount] = useState<TextNode>({
		text: "michael",
		value: 45
	});
	const input = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);
	// setCount()
	return (
		<div ref={divRef}>
			<input type="text" ref={input} onChange={handleChange} />
			<h1>{text}</h1>
		</div>
	);
};

const TodoReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "add":
			return [...state, { text: action.text, complete: false }];
		case "remove":
			return state.filter((_, i) => action.idx !== i);

		default:
			return state;
	};
};

const ReducerExample: React.FC = () => {
	const [todos, dispatch] = useReducer(TodoReducer, []);
	return (
		<>
			<div>{JSON.stringify(todos)}</div>
			<button
				onClick={() => {
					dispatch({ type: "add", text: "..." });
				}}>
				click !
			</button>
		</>
	);
};




export { ReducerExample, TextField };


// import React from "react";
// // import { TextField } from "./resources/TextField";
// // import { ReducerExample } from "./resources/TextField";
// // import Counter from "./resources/Counter";
// import { ThemeProvider } from "@material-ui/core/styles";
// // import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import clsx from "clsx";
// import {
// 	makeStyles,
// 	useTheme,
// 	Theme,
// 	createStyles
// } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

// // // s
// // const useStyles = makeStyles({
// // 	root: {
// // 		color: "red",
// // 		"& p": {
// // 			color: "green",
// // 			"& span": {
// // 				color: "blue"
// // 			}
// // 		}
// // 	}
// // });

// const drawerWidth = 240;

// const useStyles = makeStyles((theme: Theme) =>
// 	createStyles({
// 		root: {
// 			display: "flex"
// 		},
// 		appBar: {
// 			transition: theme.transitions.create(["margin", "width"], {
// 				easing: theme.transitions.easing.sharp,
// 				duration: theme.transitions.duration.leavingScreen
// 			})
// 		},
// 		appBarShift: {
// 			width: `calc(100% - ${drawerWidth}px)`,
// 			marginLeft: drawerWidth,
// 			transition: theme.transitions.create(["margin", "width"], {
// 				easing: theme.transitions.easing.easeOut,
// 				duration: theme.transitions.duration.enteringScreen
// 			})
// 		},
// 		menuButton: {
// 			marginRight: theme.spacing(2)
// 		},
// 		hide: {
// 			display: "none"
// 		},
// 		drawer: {
// 			width: drawerWidth,
// 			flexShrink: 0
// 		},
// 		drawerPaper: {
// 			width: drawerWidth
// 		},
// 		drawerHeader: {
// 			display: "flex",
// 			alignItems: "center",
// 			padding: theme.spacing(0, 1),
// 			// necessary for content to be below app bar
// 			...theme.mixins.toolbar,
// 			justifyContent: "flex-end"
// 		},
// 		content: {
//             flexGrow: 1,
//             position: "fixed",
// 			padding: theme.spacing(3),
// 			transition: theme.transitions.create("margin", {
// 				easing: theme.transitions.easing.sharp,
// 				duration: theme.transitions.duration.leavingScreen
// 			}),
// 			marginLeft: -drawerWidth
// 		},
// 		contentShift: {
//             position: "fixed",
// 			transition: theme.transitions.create("margin", {
// 				easing: theme.transitions.easing.easeOut,
// 				duration: theme.transitions.duration.enteringScreen
// 			}),
// 			marginLeft: 0
// 		}
// 	})
// );

// const App: React.FC = () => {
// 	const classes = useStyles();
// 	const theme = useTheme();
// 	const [open, setOpen] = React.useState(false);

// 	const handleDrawerOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleDrawerClose = () => {
// 		setOpen(false);
// 	};

// 	return (
// 		<div className={classes.root}>
// 			<CssBaseline />
// 			<AppBar
// 				position="fixed"
// 				className={clsx(classes.appBar, {
// 					[classes.appBarShift]: open
// 				})}>
// 				<Toolbar>
// 					<IconButton
// 						color="inherit"
// 						aria-label="open drawer"
// 						onClick={handleDrawerOpen}
// 						edge="start"
// 						className={clsx(classes.menuButton, open && classes.hide)}>
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant="h6" noWrap>
// 						Persistent drawer
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 			<Drawer
// 				className={classes.drawer}
// 				variant="persistent"
// 				anchor="left"
// 				open={open}
// 				classes={{
// 					paper: classes.drawerPaper
// 				}}>
// 				<div className={classes.drawerHeader}>
// 					<IconButton onClick={handleDrawerClose}>
// 						{theme.direction === "ltr" ? (
// 							<ChevronLeftIcon />
// 						) : (
// 							<ChevronRightIcon />
// 						)}
// 					</IconButton>
// 				</div>
// 				<Divider />
// 				<List>
// 					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
// 						<ListItem button key={text}>
// 							<ListItemIcon>
// 								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// 							</ListItemIcon>
// 							<ListItemText primary={text} />
// 						</ListItem>
// 					))}
// 				</List>
// 				<Divider />
// 				<List>
// 					{["All mail", "Trash", "Spam"].map((text, index) => (
// 						<ListItem button key={text}>
// 							<ListItemIcon>
// 								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// 							</ListItemIcon>
// 							<ListItemText primary={text} />
// 						</ListItem>
// 					))}
// 				</List>
// 			</Drawer>
// 			<main
// 				className={clsx(classes.content, {
// 					[classes.contentShift]: open
// 				})}>
// 				<div className={classes.drawerHeader} />
// 				<Typography paragraph>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 					eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
// 					dolor purus non enim praesent elementum facilisis leo vel. Risus at
// 					ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
// 					quisque non tellus. Convallis convallis tellus id interdum velit
// 					laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
// 					adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
// 					integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
// 					eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
// 					quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
// 					vivamus at augue. At augue eget arcu dictum varius duis at consectetur
// 					lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
// 					faucibus et molestie ac.
// 				</Typography>
// 				<Typography paragraph>
// 					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
// 					ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
// 					elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
// 					sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
// 					mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
// 					risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
// 					purus viverra accumsan in. In hendrerit gravida rutrum quisque non
// 					tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
// 					morbi tristique senectus et. Adipiscing elit duis tristique
// 					sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
// 					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
// 					posuere sollicitudin aliquam ultrices sagittis orci a.
// 				</Typography>
// 			</main>
// 		</div>
// 	);
// };

// export default App;

// // {
// /* <div className="App">
// 			<TextField
// 				text="hello"
// 				person={{ firstName: "jbvkjsd", lastName: "vjskdv" }}
// 				ok={false}
// 			/>
// 			<ReducerExample />
// 			<Counter>
// 				{({ count, setCount }) => (
// 					<div>
// 						{count}
// 						<button onClick={() => setCount(count + 1)}>+</button>
// 					</div>
// 				)}
// 			</Counter>
// 		</div> */
// // }

