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
		},
		gridList: {
			width: 800,
			height: 400,

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
		id: 1,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 2
	},
	{
		id: 2,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 3,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 4,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 2
	},
	{
		id: 5,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 6,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 7,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 8,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 9,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 2
	},
	{
		id: 10,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 2
	},
	{
		id: 11,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 12,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
	{
		id: 13,
		img: "https://source.unsplash.com/random",
		title: "Image",
		author: "author",
		cols: 1
	},
];

const ImageGridList: React.FC<Props> = () => {
	const classes = useStyles();

	return (
		<div className="gallery">
			<h4><span>Galleries</span> </h4>
			<div className={classes.root}>

				<GridList cellHeight={160} className={classes.gridList} cols={3}>
					{tileData.map(tile => (
						<GridListTile key={tile.id} cols={tile.cols || 1}>
							<img className="gallery-image" src={tile.img} alt={tile.title} />
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
};

export default ImageGridList;
