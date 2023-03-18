import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import PlaceDetails from "./../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List = () => {
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("");
  const places = [
    { name: "Chai Point" },
    { name: "Beer Point" },
    { name: "Cool Places" },
    { name: "Chai Point" },
    { name: "Beer Point" },
    { name: "Cool Places" },
  ];

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurant Hotels and Some fun</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel> Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurant">Restaurant</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="fun">Fun</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel> Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container className={classes.list}>
        {places?.map((places, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails places={places} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
