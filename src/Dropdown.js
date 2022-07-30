import  MenuItem  from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React from 'react';
import Select from '@mui/material/Select';

 function Dropdown  ({setFilteredData ,data})  {
    const handleChange =(event)=>{
        const filteredPhotos=data.photos.filter(
            (value)=>value.heading === event.target.value

        );
        setFilteredData(filteredPhotos)
    }
  return (
    <div>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Anime</InputLabel>
    <Select
    
    label="Anime"
    style={{width:"400px"}}
    onChange={handleChange}
  >
    { data.photos.map((value)=>{
        return(
    <MenuItem value={value.heading} key={value.id}>{value.heading}</MenuItem>
     );} )}
  </Select>
  </FormControl>
  </div>
  )
}

export default Dropdown