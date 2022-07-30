import React from "react";
import ImageSection from "./components/image-section/ImageSection";
import { Grid } from "@mui/material";
import Header from "./components/header/Header";
import HeroBanner from "./components/hero-banner/HeroBanner";

function App() {
	const [selectValue, setSelectValue] = React.useState();

	const selectValueHandler = (selectValue) => {
		setSelectValue(selectValue);
	};
	return (
		<>
			<div style={{ width: "100%" }}>
				<Header />
				<HeroBanner selectValue={selectValueHandler} />
				<div style={{ backgroundColor: "#fafafa" }}>
					<Grid container spacing={2} sx={{}}>
						<Grid item xs={12}>
							<ImageSection selectValue={selectValue} />
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	);
}

export default App;
