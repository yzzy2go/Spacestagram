import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function Navbar() {
  return (
    <div>
      <AppBar position="static" className="gradient">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs></Grid>
          <Grid item xs={10} md={6}>
            <Toolbar>
              <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                Spacestagram
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
export default Navbar;
