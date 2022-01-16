import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

function Footer() {
  return (
    <AppBar position="static" className="gradient footer">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          2022 @yzzy2go
        </Typography>
        <Link href="https://github.com/yzzy2go" style={{ marginLeft: "1em" }}>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/yzabelle-go/"
          style={{ marginLeft: "1em" }}
        >
          LinkedIn
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;
