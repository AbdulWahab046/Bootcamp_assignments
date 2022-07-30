import React from 'react';
import data from "./data.json";
import Dropdown from "./Dropdown";
import ImageSection from "./ImageSection";
import {Grid,Box} from '@mui/material';

function App() {

  const [filteredData,setFilteredData]=React.useState();
  return (
    <Box sx={{ flexGrow: 1 ,padding:"30px",color:"black"}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Dropdown setFilteredData={setFilteredData} data={data} />
        </Grid>
        <Grid item xs={4}>
          <ImageSection filteredData={filteredData} data={data} />
        </Grid>
        </Grid>
    _</Box>
  );
}

export default App;
