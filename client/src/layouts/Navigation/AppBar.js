import React from 'react';
import {Link} from "react-router-dom";
import classes from './AppBar.module.css';
import {Typography, AppBar, Toolbar, Button, Avatar} from "@material-ui/core";

const AppBarComponent = () => {
    const user = null;
    return(
        <AppBar position="static" color="inherit">
            <div>
                <Typography component={Link} to={"/"} variant={"h4"}  align="center">Memories</Typography>
            </div>
            <Toolbar>
                {user ?
                    (<div>
                            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography  variant={"h6"}>{user.result.name}</Typography>
                        <Button variant="contained" color={"secondary"}>Logout </Button>
                    </div>) : (
                        <Button componenet={Link} to={"/auth"} variant={"contained"} color={"primary"}>Sign In </Button>
                    )
                }
            </Toolbar>
        </AppBar>

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