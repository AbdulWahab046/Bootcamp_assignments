import React from "react";
import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea,
} from "@mui/material";
import data from "../../Data/data.json";

function FilteredImages({ filteredPhotos }) {
	return (
		<>
			{filteredPhotos.length ? (
				<>
					{filteredPhotos.map((photo, index) => {
						return (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardActionArea sx={{ padding: "10px" }}>
										<CardMedia
											component="img"
											height="140"
											image={photo.image_url}
											alt={photo.heading}
											sx={{ height: "250px" }}
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{photo.heading}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{photo.description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</>
			) : (
				<>
					<Grid item xs={12} sm={6} md={4}>
						<Card
							sx={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<CardActionArea sx={{ padding: "10px" }}>
								<CardMedia
									component="img"
									height="140"
									image={data.photos[0].image_url}
									alt={data.photos[0].heading}
									sx={{ height: "250px" }}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{data.photos[0].heading}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{data.photos[0].description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</>
			)}
		</>
	);
}

export default FilteredImages;
