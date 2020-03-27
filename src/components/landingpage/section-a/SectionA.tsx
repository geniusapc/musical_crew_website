import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		paper: {
			height: 140,
			width: 100
		},
		control: {
			padding: theme.spacing(2)
		}
	})
);

const HotRelease: React.FC = () => {
	const [spacing, setSpacing] = React.useState<GridSpacing>(2);
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
	};

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={spacing}>
					{[0, 1].map(value => (
						<Grid key={value} item>
							<Paper className={classes.paper} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HotRelease;
