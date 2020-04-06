import React ,{useState}from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import Delete from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            color: "black",
            boxShadow:"2px 2px 2px 3px rgba(0,0,0,0.05)",
            margin:" 0.5rem auto",
            
		},
	})
);


const Subscribers: React.FC = () => {
   
    const [subscribers] = useState([ {
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
    const getId =(id:number)=>console.log(id);
	return (
		<div className="admin-views">
            <h4>All Subscribers</h4>
			<List dense className={classes.root}>
				{subscribers.map((subscribe) => {
					const labelId = `checkbox-list-secondary-label-${subscribe.id}`;
					return (
						<ListItem key={subscribe.id} button>
							<ListItemAvatar>
								<Avatar
									alt={`Avatar n°${subscribe.title}`}
									src={subscribe.img}
								/>
							</ListItemAvatar>
							<ListItemText color="inheret" id={labelId} primary={`Line item ${subscribe.title}`} />
							<ListItemSecondaryAction>
                                <span onClick={()=>{
                                    getId(subscribe.id)}}>
                                <Delete color="primary" />
                                </span>

							</ListItemSecondaryAction>
						</ListItem> 
					)
				})}
			</List>
		</div>
	);
};

export default Subscribers;
