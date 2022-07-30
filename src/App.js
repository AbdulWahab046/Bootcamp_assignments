/* eslint-disable no-unused-vars */

import React from "react";
import { Grid, Box } from "@mui/material/";
import data from "./Components/data.json";
import Dropdown from "./Components/Dropdown";
import ImageSection from "./Components/ImageSection";

function App() {
  // console.log(data);
  const [filteredData, setFilteredData] = React.useState();
  return (

    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", margin: "30px", padding: "30px" }} >

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Dropdown setFilteredData={setFilteredData} data={data} />
        </Grid>
        <Grid item xs={6}>
          <ImageSection filteredData={filteredData} data={data} />
        </Grid>
      </Grid>
    </Box >
  );
}

export default App;
