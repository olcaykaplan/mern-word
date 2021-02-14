import React, {useState, useEffect} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import classes from './AppBar.module.css';
import decode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import {Button} from '@material-ui/core'
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import {AppBar, Toolbar, IconButton, Button, Typography, Menu, MenuItem} from "@material-ui/core" 
   
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
      fontWeight:"bold",
      margin:"5px",
    },
    button:{
        marginRight:"15px"
    }
  }));

const AppBarComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        history.push('/words');
        setUser(null)
    }

    useEffect(()=>{
        const token = user?.token;
        if(token) {
            const docededToken = decode(token);
            if(docededToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    const classes = useStyles();
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
                    Learn<sup >UP</sup>
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
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                      >
                          <MenuItem
                              onClick={handleClose}
                              containerElement={<Link to="/logout" />}
                              primaryText="Profile"
                              // leftIcon={
                              //     <FontIcon className="material-icons">people</FontIcon>
                              // }
                          >Deneme</MenuItem>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>My Favourite Words</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        <Button component={Link} to={'/words'} variant="contained" size="small" color="primary">
                        Words
                    </Button>    
                      </Menu>
                    </div> ) :(
                    <div>
                    <Button component={Link} to={'/auth'} variant="contained" size="small" color="primary" className={classes.button}>
                        Login
                    </Button>
                    </div>
                  )}
                </Toolbar>
              </AppBar>
            </div>                        
    )
}

export default  AppBarComponent;

{/* <Navbar bg="primary" variant="dark">
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
     </Navbar> */}