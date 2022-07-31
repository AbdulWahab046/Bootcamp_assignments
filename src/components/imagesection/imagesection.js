import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "../data/data.json";

function ImageSection({ selectValue }) {
	console.log(selectValue);
	let filteredData = data.photos.filter((photoData) => {
		return photoData.heading === selectValue;
	});

	
	return (

			<Box sx={{ flexGrow: 1, textAlign: "center" }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					sx={{ textAlign: "center" }}
				>
					{
						filteredData ? (
							<>
							{
								filteredData.map(value => (
							<Grid item xs={2} sm={4} md={4}>
								<Card sx={{ maxWidth: 345 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="130"
											image={value.image_url}
											alt={value.heading}
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{value.heading}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{value.description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
								)
								)
							}
							</>
						) : <>
								<Grid item xs={2} sm={4} md={4}>
								<Card sx={{ maxWidth: 345 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="130"
											image={data.photos[1].image_url}
											alt={data.photos[1].heading}
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{data.photos[1].heading}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{data.photos[1].description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
							
							</>
					}
				
				</Grid>
			</Box>

	
				
								/* filteredData.map(value => {
									(<>
									<Grid item xs={2} sm={4} md={4}>
								<Card sx={{ maxWidth: 345 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="130"
											image={photoData.image_url}
											alt={photoData.heading}
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{photoData.heading}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{photoData.description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid></>
							) */
							

						
		
				
				
	);
}

export default ImageSection;