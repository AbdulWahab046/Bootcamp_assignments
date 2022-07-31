import React from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";

function DropDown({ selectValue }) {
	const selectValueHandler = (e) => {
		selectValue(e.target.value);
	};

	return (
		<>
			<InputLabel id="demo-simple-select-label">Photos</InputLabel>

			<div style={{ width: "50%" }}>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Photos"
					sx={{ width: "100%", backgroundColor: "white" }}
					onChange={selectValueHandler}
				>
					<MenuItem value="Free Photos">Free Photo</MenuItem>
					<MenuItem value="New Photos">New Photo</MenuItem>
					<MenuItem value="Premium Photos">Premium Photo</MenuItem>
				</Select>
			</div>
		</>
	);
}

export default DropDown;