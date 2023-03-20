import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

// import { AutoComplete } from "@react-google-maps/api";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState('');
  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlaces().geometry.location.lat();
    const lng = autocomplete.getPlaces().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Maps
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore the things on Maps
          </Typography>
          <Autocomplete OnLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search... "
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
