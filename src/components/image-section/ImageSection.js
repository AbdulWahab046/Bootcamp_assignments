import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import data from "../../Data/data.json";
import FilteredImages from "../filtered-images/FilteredImages";

const useStyles = makeStyles({
	imagesContainer: {
		// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		background: "#e8eded",
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

function ImageSection({ selectValue }) {
	const classes = useStyles();
	// console.log(selectValue);

	let filteredPhotos = data.photos.filter((photo) => {
		return photo.heading === selectValue;
	});

	// console.log(filteredPhotos);
	return (
		<>
			<Box
				sx={{
					pt: 3,
					pb: 12,
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						padding: {
							xs: "20px 30px ",
							sm: "00px 50px ",
							md: "0px 200px ",
						},
					}}
					className={classes.imageContainer}
				>
					<div style={{}}>
						<Typography variant="h5" gutterBottom component="h5" align="center">
							Say so long to creative block with curated sets{" "}
						</Typography>
						<Typography
							variant="h6"
							component="h6"
							align="center"
							className={classes.titleP}
						>
							Our expert image researchers bring you fresh inspiration each
							month, with curated sets hand-picked from the very best authentic
							stock photos in our library.
						</Typography>
						<Typography
							variant="h5"
							component="h5"
							className={`${classes.titleP} ${classes.selectTagHeading}`}
						>
							Image Stock:&nbsp;
							<Typography
								variant="h5"
								component="h5"
								className={classes.selectTag}
							>
								{selectValue
									? `"${selectValue}"`
									: `"${data.photos[0].heading}"`}
							</Typography>
						</Typography>
					</div>

					<Grid container spacing={4}>
						<FilteredImages filteredPhotos={filteredPhotos} />
					</Grid>
				</Container>
			</Box>
		</>
	);
}

export default ImageSection;
