import React from 'react';
import { Select , MenuItem } from '@mui/material';
function Dropdown({setFilterdata, data }) {    
const handle= (event)=>{
    setFilterdata(event.target.value);
}

  return (
    <>
    <Select style={{width :"300px"}} onChange={handle}>
        { data.photos.map((value)=>{
                return(
                    <MenuItem value={value.heading} key={value.id}>
                        {value.heading}
                    </MenuItem>
                )

        })
        }
    </Select>
    </>
  )
}

export default Dropdown