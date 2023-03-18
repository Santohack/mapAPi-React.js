import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";

import React from "react";
import  SearchIcon  from "@material-ui/icons/Search";
import useStyles from "./styles";

// import { AutoComplete } from "@react-google-maps/api";




const Header = () => {
  const classes = useStyles();
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
          {/* <AutoComplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search... "
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          {/* </AutoComplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
