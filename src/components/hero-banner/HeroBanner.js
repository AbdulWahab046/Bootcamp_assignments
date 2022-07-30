import React from "react";
import { Typography } from "@mui/material";
import heroImage from "../../store/hero.jpg";
import DropDown from "../dropdown/DropDown";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	appRoot: {
		// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		backgroundColor: "black !important",
		height: "60px",
	},
	title: {
		marginBottom: "20px !important",
		color: "white",
		fontWeight: "bold",
	},
	titleP: {
		marginBottom: "60px !important",
		color: "white",
		fontWeight: "bold",
		// maxWidth: "739px !important",
	},
	selectTagHeading: {
		display: "flex",
	},
	selectTag: {
		fontWeight: "500",
		color: "blue",
	},
});

function HeroBanner({ selectValue }) {
	const classes = useStyles();
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${heroImage})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "60vh",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<div>
					<Typography
						variant="h3"
						gutterBottom
						component="h3"
						align="center"
						className={classes.title}
					>
						Download 10 free images now
					</Typography>
					<Typography
						variant="h6"
						component="h6"
						align="center"
						className={classes.title}
					>
						Try iStock free for one month. Cancel anytime during your trial, at
						no cost, and still keep your images.
					</Typography>
					<div style={{ width: "90%", margin: "0 auto" }}>
						<DropDown selectValue={selectValue} />
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroBanner;
