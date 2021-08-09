import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

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
    style={{ height: "100vh" }}
  >
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.grids}>
      <Alert
        style={{ width: "90%", margin:"0 5%", top:"auto" }}
        severity={"info"} 
      >
        <table>
          <tr>
            <td>Email Address:  &nbsp;</td>
            <td>test@test</td>
          </tr>
          <tr>
            <td>Password :  </td>
            <td>1234</td>
          </tr>
        </table>
      </Alert>
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
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={4}
      className={classes.grids}
    ></Grid>
  </Grid>
);
export default AuthLayout;
