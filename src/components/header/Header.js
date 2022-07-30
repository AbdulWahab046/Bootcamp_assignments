import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, Box, IconButton, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	appRoot: {
		// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		backgroundColor: "black !important",
		height: "60px",
	},
	titleP: {
		marginBottom: "60px !important",
	},
	selectTagHeading: {
		display: "flex",
	},
	selectTag: {
		fontWeight: "500",
		color: "blue",
	},
});

function Header() {
	const classes = useStyles();

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" className={classes.appRoot}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						></IconButton>
						<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
							iStock
						</Typography>
						<Button color="inherit">Home</Button>
						<Button color="inherit">About</Button>
						<Button color="inherit">Gallery</Button>
						<Button color="inherit">Signup</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Header;
