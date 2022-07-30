import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Pics from './components/pics';
import data from './data.json';
import Dropdown from './components/dropdown';

function App() {
  const [selectValue, setselectValue] = React.useState();
  const selected = ( val) =>{
    setselectValue(val);
  }
   return (
    <>
      <Grid container sx={{margin: "100px"}}>
        <Grid item xs={6} md={6}>
        <Dropdown setFilterdata={selected} data={data}/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pics selectedval={selectValue} data={data}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
