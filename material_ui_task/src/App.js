import React from "react";
import Grid from '@mui/material/Grid';
import Dropdown from "./Dropdown";
import data from "./data.json";
import SectionImage from "./SectionImage";

function App() {

  const [filteredData,setFilteredData]=React.useState();
  return (
    <div sx={{ flexGrow: 1 ,padding:"30px",color:"black"}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Dropdown setFilteredData={setFilteredData} data={data} />
        </Grid>
        <Grid item xs={4}>
          <SectionImage filteredData={filteredData} data={data} />
        </Grid>
        </Grid>
    </div>
  );
}
export default App;
