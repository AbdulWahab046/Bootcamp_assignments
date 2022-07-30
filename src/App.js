import React from "react";
import Dropdown from "./Dropdown";
import ImageSection from "./ImageSection";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import data from "./Data.json";

function App() {
  const [filtereData, setFiltereData] = React.useState();
  return (
    <Box style={{ padding: "30px", margin: "30px" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={12}>
          <Dropdown setFiltereData={setFiltereData} data={data} />
        </Grid>
        <Grid item md={12}>
          <ImageSection filtereData={filtereData} data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
