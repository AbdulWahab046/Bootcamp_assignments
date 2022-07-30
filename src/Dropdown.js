import React from 'react'
import {MenuItem, Select, Box, InputLabel, FormControl} from '@mui/material/';


export default function Dropdwon({setFiltereData,data}) {
   const handleChange=(event)=>{
        console.log(event.target.value);
    const filterPhoto = data.photos.filter((value)=>value.heading === event.target.value);
   setFiltereData(filterPhoto);
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