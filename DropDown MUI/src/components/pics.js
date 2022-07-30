import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Pics({selectedval, data }) {
     const filterphotos = data.photos.filter(
        (value)=> value.heading=== selectedval
    );
  return (
    <Card sx={{ maxWidth: 345 }}>

       {!selectedval ?(
          <>
              <CardMedia
                  component="img"
                  height="140"
                  image={"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"}
                  alt="SE"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Default
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                  </Typography>
              </CardContent>
            
          </>
    ):(
        filterphotos.map((filteredPhoto)=>{
            return(<>
                <CardMedia
                    component="img"
                    height="140"
                    image={filteredPhoto.image_url}
                    alt={filteredPhoto.heading}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {filteredPhoto.tag}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {filteredPhoto.description}

                    </Typography>
                </CardContent>
            </>)
        }) 
    )
    }
  </Card>
  )
}

export default Pics