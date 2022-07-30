import React from 'react'
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function ImageSection({filterData,data}) {
    console.log(filterData);
  return (
    <div>


<Card sx={{ maxWidth: 345 }}>
    {(filterData ? filterData :data.photos).map((value)=>
    !filterData && value.id === 1 ? (
        <>
        <CardMedia
        component="img"
        height="194"
        image={value.image_url}
        alt="Paella dish"
        />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {value.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value.description}
        </Typography>
      </CardContent>
        </>

    ): filterData ? (
        <>
              <CardMedia
        component="img"
        height="194"
        image={value.image_url}
        alt="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {value.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value.description}
        </Typography>
      </CardContent>
        </>

    ):null
    
    )}
    </Card>
    </div>
  )
}