import React from 'react'
import Dropdown from './Dropdown';
import ImageSection from './ImageSection';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import data from "./data.json";



function App() {
  const[filterData,setFilterData] = React.useState();
  return (
    <Box style={{padding:"70px", margin:"70px",}}>

    <Grid container   rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
      <Dropdown setFilterData={setFilterData} data={data} />
      </Grid>
      <Grid item xs={12}  md={6}>
      <ImageSection  filterData={filterData} data={data}/>
      </Grid>
      </Grid>
    </Box>
  );
}

export default App;