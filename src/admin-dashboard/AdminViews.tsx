import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: "grid",
			gridTemplateColumns: "repeat(12, 1fr)",
			gridGap: theme.spacing(3),
		},
		paper: {
			// padding: theme.spacing(2),
			// // textAlign: "center",
			// // color: theme.palette.text.secondary,
			// // whiteSpace: "nowrap",
            // marginBottom: theme.spacing(2),
            boxShadow:"2px 2px 0px 2px #333",
            height:200,
            margin:"10px 0 "
		},
		divider: {
			margin: theme.spacing(2, 0),
		},
	})
);

interface Props {}

// const useStyles = makeStyles({
// 	root: {
// 		color: "red",
// 		"& p": {
// 			color: "green",
// 			"& span": {
// 				color: "blue",
// 			},
// 		},
// 	},
// 	box: {
// 		background: "black",
// 		height:100,
// 		width: 50,
// 	},
// });

const AdminViews: React.FC<Props> = () => {
	const classes = useStyles();
	return (
		<div >
			<Typography variant="subtitle1" gutterBottom>
				Material-UI Grid:
			</Typography>
			<Grid container spacing={3}>
				<Grid item className={classes.paper} xs={3}>
					<div>acilis velit quam voluptatibus laudantium cumque corporis earum totam? Cupiditate voluptatem praesentium consequuntur quos explicabo minus voluptate quas facilis. Repellendus corrupti mollitia accusantium error nisi tenetur maxime voluptatibus, quo similique sequi repudiandae distinctio tempora deserunt molestiae quos magni natus a nam eum officiis odit dolorem voluptates enim! Autem quia quisquam odit error debitis provident fugit delectus molestiae voluptatibus voluptate. Impedit a possimus molestias consectetur reiciendis architecto recusandae expedita adipisci ipsa illum.</div>
				</Grid>
				<Grid item className={classes.paper} xs={3}>
					<div>acilis velit quam voluptatibus laudantium cumque corporis earum totam? Cupiditate voluptatem praesentium consequuntur quos explicabo minus voluptate quas facilis. Repellendus corrupti mollitia accusantium error nisi tenetur maxime voluptatibus, quo similique sequi repudiandae distinctio tempora deserunt molestiae quos magni natus a nam eum officiis odit dolorem voluptates enim! Autem quia quisquam odit error debitis provident fugit delectus molestiae voluptatibus voluptate. Impedit a possimus molestias consectetur reiciendis architecto recusandae expedita adipisci ipsa illum.</div>
				</Grid>
				<Grid item className={classes.paper} xs={3}>
					<div>acilis velit quam voluptatibus laudantium cumque corporis earum totam? uam odit error debitis provident fugit delectus molestiae voluptatibus voluptate. Impedit a possimus molestias consectetur reiciendis architecto recusandae expedita adipisci ipsa illum.</div>
				</Grid>
				<Grid item className={classes.paper} xs={3}>
					<div>acilis velit quam voluptatibus laudantium cumque corporis earum totam? uam odit error debitis provident fugit delectus molestiae voluptatibus voluptate. Impedit a possimus molestias consectetur reiciendis architecto recusandae expedita adipisci ipsa illum.</div>
				</Grid>
				<Grid item className={classes.paper} xs={8}>
					<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias minima fugiat nobis, minus distinctio libero aliquam! Repellat minima aliquam vitae accusantium officiis dolorem voluptatem, voluptas dolores? Placeat laudantium libero magni impedit sint magnam est ipsa optio esse nostrum necessitatibus reiciendis corrupti earum minima cum temporibus ducimus omnis inventore fugiat, culpa incidunt unde. Aspernatur repellat vel voluptates nesciunt! Delectus ab voluptatum odio accusamus nisi ipsum atque laborum vel pariatur optio veritatis nam eius placeat iste maiores inventore magnam asperiores labore saepe consequuntur repudiandae, harum quas. Quia doloremque adipisci earum, obcaecati nulla necessitatibus ipsa ducimus iste veniam accusamus cumque nihil aperiam.</div>
				</Grid>
				<Grid item className={classes.paper} xs={4}>
					<div>acilis velit quam voluptatibus laudantium cumque corporis earum totam? uam odit error debitis provident fugit delectus molestiae voluptatibus voluptate. Impedit a possimus molestias consectetur reiciendis architecto recusandae expedita adipisci ipsa illum.</div>
				</Grid>
			</Grid>
			<Divider className={classes.divider} />
		</div>
	);
};

export default AdminViews;
