/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react";
import { Select, MenuItem } from "@mui/material";

function Dropdown({ setFilteredData, data }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    const filteredPhotos = data.photos.filter(
      (value) => value.heading === event.target.value
    );
    setFilteredData(filteredPhotos);
  };

  return (
    <div>
      <Select label="Photos" style={{ width: "500px" }} onChange={handleChange}>
        {data.photos.map((value) => {
          return (
            <MenuItem value={value.heading} key={value.id}>
              {value.heading}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default Dropdown;
