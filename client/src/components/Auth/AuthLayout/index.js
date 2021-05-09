import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import leftPoster from "../../../assets/img/undraw_researching.svg";
import rightPoster from "../../../assets/img/undraw_mobile_testing.svg";

import classes from "./index.module.css";

//smDown component={Hidden}
const AuthLayout = ({ children }) => (
  <Grid
    container
    xs={12}
    sm={12}
    md={12}
    lg={12}
    xl={12}
    style={{ backgroundColor: "rgba(254, 174, 85, 0.2)", height: "100vh" }}
  >
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.grids}>
      <img src={leftPoster} alt="Left Poster" className={classes.imgLeft} />
    </Grid>
    <Grid
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={4}
      justify="center"
      style={{ paddingTop: "30px" }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#feae55",
          fontWeight: "bold",
          marginBottom: "35px",
        }}
      >
        Learn Up
      </h1>
      {children}
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.grids}>
      <img src={rightPoster} alt="Right Poster" className={classes.imgRight} />
    </Grid>
  </Grid>
);
export default AuthLayout;
