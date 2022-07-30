
import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function Dropdown({setFilterData,data}) {
   const handleChange=(eo)=>{
        console.log(eo.target.value);
    const filterPhoto = data.photos.filter((value)=>value.heading === eo.target.value);
   setFilterData(filterPhoto);
    };
 

  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Card</InputLabel>
    <Select
        onChange={handleChange}
        label="Photo">
        {data.photos.map((value)=>{
              return(
                <MenuItem value={value.heading} key={value.id}>
                    {value.heading}
                </MenuItem>
            )

        })
        }
              
      </Select>
    </FormControl>
  </Box>
  )
}