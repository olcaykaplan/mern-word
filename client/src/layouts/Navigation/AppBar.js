import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import classes from './AppBar.module.css';

const AppBarComponent = () => {
    return(
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <NavLink to={'/words'} className={classes.NavLink}>Words</NavLink>
            <NavLink to={'/words/word/newWord'} className={classes.NavLink}>New Word</NavLink>
            <NavLink to={'/words/uploadWords'} className={classes.NavLink}>Upload Words</NavLink>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
    </Navbar>
    )
}

export default  AppBarComponent;