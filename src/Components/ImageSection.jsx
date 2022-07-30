/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ImageSection({ SetFilteredData, data }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {(SetFilteredData ? SetFilteredData : data.photos).map((value) =>
          !SetFilteredData && value.id === 1 ? (
            <>
              <CardMedia
                component="img"
                height="194"
                image={value.image_url}
                alt="Image"
              />
              <CardContent>
                <Typography variant="h4" color="text.secondary">
                  {value.heading}
                </Typography>
                <Typography variant="body5" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </>
          ) : SetFilteredData ? (
            <>
              <CardMedia
                component="img"
                height="194"
                image={value.image_url}
                alt="Image"
              />
              <CardContent>
                <Typography variant="h4" color="text.secondary">
                  {value.heading}
                </Typography>
                <Typography variant="body5" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </>
          ) : null
        )}

        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent> */}
      </Card>
    </div>
  );
}

export default ImageSection;
