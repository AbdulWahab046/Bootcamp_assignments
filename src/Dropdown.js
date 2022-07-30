import React from 'react'
import { Select, MenuItem } from '@mui/material';

function Dropdown({ setFilteredData, data }) {

    const handleChange = (event) => {
        const filteredPhotos = data.photos.filter((value) => value.heading === event.target.value)
        
        setFilteredData(filteredPhotos);
    }
    return (
        <div>
            <Select

                label="photos"
                style={{ width: "200px" }}
                onChange={handleChange}
            >
                {
                    data.photos.map((value) => {
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
export default Dropdown
