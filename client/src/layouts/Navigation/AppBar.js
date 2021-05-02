import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { makeStyles } from "@material-ui/core/styles";

import MenuList from "./MenuList";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "35px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "darkorange",
    fontWeight: "bold",
    margin: "5px",
  },
  button: {
    marginRight: "15px",
  },
}));

const AppBarComponent = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
  }, [location]);



  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Learn<sup>UP</sup>
          </Typography>
          {user ? (
              <MenuList />
          ) : (
            <div>
              <Button
                component={Link}
                to={"/auth"}
                variant="contained"
                size="small"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;

{
  /* <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
           <NavLink to={'/words'} className={classes.NavLink}>Words</NavLink>
           <NavLink to={'/'} className={classes.NavLink}></NavLink>
            <NavLink to={'/words/word/newWord'} className={classes.NavLink}>New Word</NavLink>
            <NavLink to={'/words/uploadWords'} className={classes.NavLink}>Upload Words</NavLink>

       </Nav>
       <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-light">Search</Button>
        </Form>
     </Navbar> */
}
