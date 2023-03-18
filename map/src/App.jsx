import "./App.css";

import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Maps from "./components/Maps/Maps";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Maps />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
