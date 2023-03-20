import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import useStyles from "./styles";

const PlaceDetails = ({ places,selected,refProps }) => {
  const classes = useStyles();
  if(selected) refProps?.current?.scrollIntoView({behavior: "smooth", block:"start"})
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          places.photo
            ? places.photo.images.large.url
            : "https://media.cntraveler.com/photos/628fd5ceeccad063f926fe99/master/w_3936,h_2624,c_limit/Plitvice-Lakes-Croatia-GettyImages-1080935866.jpg"
        }
        title={places.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {places.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating size="large" value={Number(places.rating)} readOnly />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {places.ranking}
          </Typography>
        </Box>
        {places?.awards?.map((award) => (
          <Box
            my={1}
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <img src={award.images.small} alt="awards-img" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {places?.cuisine?.map(({ name }) => (
          <Chip className={classes.chip} size="small" label={name} key={name} />
        ))}
        {places?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {places.address}
          </Typography>
        )}
        {places?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon /> {places.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="textSecondary"
            onClick={() => window.open(places.werb_url, "_blank")}
          >
            Shop
          </Button>
          <Button
            size="small"
            color="textSecondary"
            onClick={() => window.open(places.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
