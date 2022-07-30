import React from 'react'
import Dropdwon from './Dropdwon';
import ImageSection from './ImageSection';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import data from "./data.json";



function App() {
  const[filtereData,setFiltereData]=React.useState();
  return (
    <Box style={{padding:"50px", margin:"50px",}}>

    <Grid container   rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
      <Dropdwon setFiltereData={setFiltereData} data={data} />
      </Grid>
      <Grid item xs={12}  md={6}>
      <ImageSection  filtereData={filtereData} data={data}/>
      </Grid>

</Grid>
    </Box>
  );
}

export default App;
