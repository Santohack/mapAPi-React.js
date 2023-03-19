import { Typography, paper, useMediaQuery } from "@material-ui/core";

import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab";
import React from "react";
import useStyles from "./styles";

const Maps = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  // const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDgI9ADs6-ayVFSqgVy2GHibK7W5zfv0OI" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Maps;
