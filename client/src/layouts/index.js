import React from "react";
import { Grid } from "@material-ui/core";
import AppBar from "./Navigation/AppBar";


const Layout = ({ children }) => {
    console.log(children)
    return(
  <Grid
    container
    xs={12}
    sm={12}
    md={12}
    lg={12}
    xl={12}
    spacing={1}
    justify="center"
  >
    <Grid item xs={8} sm={8} md={8} lg={8} xl={8} spacing={1}>
      <AppBar/>
    </Grid>
    {children}
  </Grid>
)};

export default Layout;