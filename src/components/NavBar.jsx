import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navBar">
          <Typography variant="title" color="inherit">
            <h1 className="appName">MoodMaker</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;