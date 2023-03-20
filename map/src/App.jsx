import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Maps from "./components/Maps/Maps";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlaceData } from "./api";

function App() {
  const [place, setPlace] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClick, setChildClick] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("");
  const [filterRating, setFilterRating] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    const filterRating = place.filter((place) => place.rating > rating);
    setFilterRating(filterRating);
  }, [rating]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      // console.log(coordinates, bounds);
      getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlace(data);
        setFilterRating([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filterRating.length ? filterRating : place}
            childClick={childClick}
            isLoading={isLoading}
            type={type}
            rating={rating}
            setType={setType}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Maps
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filterRating.length ? filterRating : place}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
