import React from "react";
import { Select, MenuItem, Typography } from "@mui/material";

function DropDown({ selectValue }) {
	// const [selectVal, setSelectVal] = React.useState();
	const selectValueHandler = (e) => {
		// setSelectVal(e.target.value);
		selectValue(e.target.value);
	};

	return (
		<>
			<div style={{ width: "100%", display: "flex", alignItems: "center" }}>
				<div>
					<Typography
						variant="h6"
						component="h6"
						align="center"
						sx={{ color: "white", paddingRight: "20px", fontFamily: "cursive" }}
					>
						Photos
					</Typography>
				</div>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Photos"
					sx={{ width: "100%", backgroundColor: "white" }}
					onChange={selectValueHandler}
					// value={selectVal}
				>
					<MenuItem value="Free Photos">Free Photos</MenuItem>
					<MenuItem value="New Photos">New Photos</MenuItem>
					<MenuItem value="Premium Photos">Premium Photos</MenuItem>
				</Select>
			</div>
		</>
	);
}

export default DropDown;
