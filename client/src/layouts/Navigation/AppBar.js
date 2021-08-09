import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
    history.push("/");
    setUser(null);
    handleClose();
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const docededToken = decode(token);
      if (docededToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Learn<sup>UP</sup>
          </Typography>
          {user ? (
            <div>
              <AccountCircle />
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  // leftIcon={
                  //     <FontIcon className="material-icons">people</FontIcon>
                  // }
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  component={Link}
                  to={"/words/word/newword"}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  New Word
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
                <Button
                  component={Link}
                  to={"/words"}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Words
                </Button>
              </Menu>
            </div>
          ) : (
            <div>
              <Button
                component={Link}
                to={"/"}
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
