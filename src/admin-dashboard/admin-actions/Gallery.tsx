import React ,{useState}from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
	})
);


const Gallery: React.FC = () => {
    // const tileData = [
    //     {
    //         id: 1,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 2,
    //     },
    //     {
    //         id: 2,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 3,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 4,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 2,
    //     },
    //     {
    //         id: 5,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 6,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 7,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 8,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 9,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 2,
    //     },
    //     {
    //         id: 10,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 2,
    //     },
    //     {
    //         id: 11,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 12,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    //     {
    //         id: 13,
    //         img: "https://source.unsplash.com/random",
    //         title: "Image",
    //         author: "author",
    //         cols: 1,
    //     },
    // ];
    const [galleries,setGalleries] = useState([ {
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
    }])
	const classes = useStyles();
	// const [checked, setChecked] = React.useState([1]);

	// const handleToggle = (value: number) => () => {
	// 	const currentIndex = checked.indexOf(value);
	// 	const newChecked = [...checked];

	// 	if (currentIndex === -1) {
	// 		newChecked.push(value);
	// 	} else {
	// 		newChecked.splice(currentIndex, 1);
	// 	}

	// 	setChecked(newChecked);
    // };
    const getId =(id:number)=>console.log(id);
	return (
		<div style={{ background: "white", color: "black" }}>
			<List dense className={classes.root}>
				{galleries.map((gallery) => {
					const labelId = `checkbox-list-secondary-label-${gallery.id}`;
					return (
						<ListItem key={gallery.id} button>
							<ListItemAvatar>
								<Avatar
									alt={`Avatar n°${gallery.title}`}
									src={gallery.img}
								/>
							</ListItemAvatar>
							<ListItemText id={labelId} primary={`Line item ${gallery.title}`} />
							<ListItemSecondaryAction>
								{/* <Checkbox
									edge="end"
									onChange={handleToggle(gallery.id)}
									checked={checked.indexOf(gallery)}
									inputProps={{ "aria-labelledby": labelId }}
								/> */}
                                <span onClick={()=>{
                                    getId(gallery.id)}}>
                                <Delete />
                                </span>

							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
		</div>
	);
};

export default Gallery;
