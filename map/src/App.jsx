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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    // console.log(coordinates, bounds);
    getPlaceData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlace(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={place} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Maps
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
