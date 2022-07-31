import React from "react";
import DropDown from "./components/dropdown/dropdown";
import ImageSection from "./components/imagesection/imagesection";
import { Grid } from "@mui/material";

function App() {
	const [selectValue, setSelectValue] = React.useState();

	const selectValueHandler = (selectValue) => {
		setSelectValue(selectValue);
	};
	return (
		<>
			<div style={{ width: "100%" }}>
				<div style={{ backgroundColor: "#fafafa" }}>
					<Grid container spacing={2} sx={{}}>
						<Grid item xs={12}>
							<DropDown selectValue={selectValueHandler} />
						</Grid>
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