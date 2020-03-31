import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-around",
			overflow: "none",
			// backgroundColor: theme.palette.background.paper
		},
		gridList: {
			width: 800,
            height: 500,
            margin:0
		}
	})
);

interface Props {
	titleData?: Array<{
		img?: string;
		title?: string;
		author?: string;
		cols?: number;
	}>;
}

const tileData = [
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 2
	},
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 2
	},
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	// {
	// 	img: "https://source.unsplash.com/random",
	// 	title: "Image",
	// 	author: "author",
	// 	cols: 1
	// }
	// {
	// 	img: "https://source.unsplash.com/random",
	// 	title: "Image",
	// 	author: "author",
	// 	cols: 2
	// },
	// {
	// 	img: "https://source.unsplash.com/random",
	// 	title: "Image",
	// 	author: "author",
	// 	cols: 2
	// },
	// {
	// 	img: "https://source.unsplash.com/random",
	// 	title: "Image",
	// 	author: "author",
	// 	cols: 1
	// },
	// {
	// 	img: "https://source.unsplash.com/random",
	// 	title: "Image",
	// 	author: "author",
	// 	cols: 1
	// },
	// {
	// 	img: "https://source.unsplash.com/random",
	// 	title: "Image",
	// 	author: "author",
	// 	cols: 1
	// },
];

const ImageGridList: React.FC<Props> = () => {
	const classes = useStyles();

	return (
		<div className="gallery">
			<div className={classes.root}>
				<GridList cellHeight={160} className={classes.gridList} cols={3}>
					{tileData.map(tile => (
						<GridListTile key={tile.img} cols={tile.cols || 1}>
							<img className="gallery-image" src={tile.img} alt={tile.title} />
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
};

export default ImageGridList;
