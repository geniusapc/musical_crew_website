import React, { useState } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import Delete from "@material-ui/icons/Delete";

import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
			color: "black",
			boxShadow: "0px 0px 3px 3px rgba(0,0,0,0.05)",
			margin: " 0.5rem auto",
		},
	})
);

const Gallery: React.FC = () => {
	const [opened, setIsOpened] = useState(true);
	const [galleries] = useState([
		{
			id: 1,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 2,
		},
		{
			id: 2,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 1,
		},
		{
			id: 3,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 1,
		},
		{
			id: 4,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 2,
		},
		{
			id: 5,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 1,
		},
		{
			id: 6,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 1,
		},
		{
			id: 7,
			img: "https://source.unsplash.com/random",
			title: "Image",
			author: "author",
			cols: 1,
		},
	]);
	const classes = useStyles();
	const getId = (id: number) => console.log(id);
	return (
		<div className="admin-views">
			<h4>All Galleries</h4>
			<List dense className={classes.root}>
				{galleries.map((gallery) => {
					const labelId = `checkbox-list-secondary-label-${gallery.id}`;
					return (
						<ListItem key={gallery.id} button>
							<ListItemAvatar>
								<Avatar alt={`Avatar n°${gallery.title}`} src={gallery.img} />
							</ListItemAvatar>
							<ListItemText
								color="inheret"
								id={labelId}
								primary={`Line item ${gallery.title}`}
							/>
							<ListItemSecondaryAction>
								<span
									onClick={() => {
										getId(gallery.id);
										setIsOpened(!opened);
									}}>
									<Delete color="primary" />
								</span>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
			<div className={opened ? "admin-views-form" : "open"} >>
				<form>
					<span className="collapse" onClick={() => setIsOpened(false)}>
						<Close color="primary" />
					</span>
					<div>
						<label htmlFor="title">Title</label>
						<input type="text" placeholder="gallery title" />
					</div>
					<div>
						<label htmlFor="Image">Gallery</label>
						<input type="file" placeholder="images" />
					</div>
					<div>
						<input type="date" placeholder="date" />
					</div>
					<div>
						<label htmlFor="text">Text</label>
						<textarea name="text" rows={10} placeholder="type gallery text here"></textarea>
					</div>
					<div>
						<input type="submit" className="btn" value="SEND" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Gallery;
