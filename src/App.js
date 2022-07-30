import React from 'react';
import './App.css';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Dropdown from './Dropdown';
import ImageSection from './ImageSection';
import data from "./data.json";
function App() {
  const [filteredData, setFilteredData]= React.useState();
  console.log(data)
  return (

    <Box sx={{ width: "100%" , padding: "30px", margin: "30px"}}>
  <Grid container  rowSpacing={1} columnSpacing= {{xs:1, sm:2, md:3}}>
    <Grid item xs={6} >
     <Dropdown setFilteredData={ setFilteredData } data={data}/>
    </Grid>
    <Grid item xs={6} >
      <ImageSection filteredData={ filteredData } data={data}/>
    </Grid>
  </Grid>
  </Box>
  );
}

export default App;
