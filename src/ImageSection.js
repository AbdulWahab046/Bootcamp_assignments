import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material/';


export default function ImageSection({filtereData,data}) {
    console.log(filtereData);
  return (
    <div>


<Card sx={{ maxWidth: 345 }}>
    {(filtereData ? filtereData :data.photos).map((value)=>
    !filtereData && value.id === 1 ? (
        <>
              <CardMedia
        component="img"
        height="194"
        image={value.img_url}
        alt="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {value.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {value.description}
        </Typography>
      </CardContent>
        </>

    ): filtereData ? (
        <>
              <CardMedia
        component="img"
        height="194"
        image={value.img_url}
        alt="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {value.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
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