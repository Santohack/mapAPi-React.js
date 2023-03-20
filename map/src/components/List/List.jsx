import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { createRef, useEffect, useState } from "react";

import PlaceDetails from "./../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List = ({
  places,
  childClick,
  isLoading,
  type,
  rating,
  setType,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();
  //console.log({ childClick });
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [ places]);
  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurant Hotels and Some fun</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel> Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurant</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Fun</MenuItem>
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
                <PlaceDetails
                  places={places}
                  selected={Number(childClick) === i}
                  refProps={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
