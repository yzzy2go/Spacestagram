import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Navbar() {
  return (
    <div>
      <AppBar position="static" className="gradient footer">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Created with NASA's APOD API
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
