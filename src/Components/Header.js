import React, { Component } from 'react'
import { Navbar,
         Nav, 
         FormControl, 
         Container, 
         Form, 
         Button 
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Heder extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img 
                            src={logo}
                            height="30"
                            width= "30"
                            className="d-inline-block align-top"
                            alt="Logo"
                            /> React_bootstrap site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar">
                        <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link> 
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                <Router>
                    <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/contacts">
                                <Contacts />
                            </Route>
                            <Route exact path="/blog">
                                <Blog />
                            </Route>
                    </Switch>
                </Router> 
                
            </>

            
        )
    }
}
