import React from 'react'
import Card from '@mui/material/Card';
import {CardMedia} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ImageSection({filteredData, data}) {
  return (
    <div>
         <Card sx={{ maxWidth: 345 }}>
         {!filteredData ?(
        <>
        {
            data.photos.map(value=>{
                return(
                    <>
                     <CardMedia
      component="img"
      height="194"
      image={value.image_url}
      alt="Image"
    />
    <CardContent>
        <Typography variant='h5'  color="text.secondary">{value.heading}</Typography>
      <Typography variant="body2" color="text.secondary">
      {value.description}
      </Typography>
    </CardContent>
                    </>
                )
            })
        }
   
        </>
      ):(
        <>
        {
            filteredData.map(filteredvalue=>{
                return(
                    <>
        <CardMedia
      component="img"
      height="194"
      image={filteredvalue.image_url}
      alt="Image"
    />
    <CardContent>
        <Typography variant='h5'  color="text.secondary">{filteredvalue.heading}</Typography>
      <Typography variant="body2" color="text.secondary">
      {filteredvalue.description}
      </Typography>
    </CardContent>
                    </>
                )
            })
        }
   
        </>
      )
      }
    
  </Card></div>
  )
}

export default ImageSection