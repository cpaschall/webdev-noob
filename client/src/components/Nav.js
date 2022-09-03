// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

export default function Navigate({ currentPage, handlePageChange }) {
    const location = useLocation();
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand 
                    as={Link}
                    to="/"
                    active={location.pathname === "/"}
                >
                    <img
                        alt=""
                        src=""
                        width=""
                        height=""
                        className=""
                    />
                    Brand
                </Navbar.Brand>
                <Nav>
                    <Nav.Link 
                        as={Link}
                        to="/"
                        active={location.pathname === "/"}
                        // className="nav-link"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/about"
                        active={location.pathname === "/about"}
                        // className="nav-link"
                    >
                        About
                    </Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to="/connect"
                        active={location.pathname === "/connect"}
                        // className="nav-link"
                    >
                        Connect
                    </Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to="/contribute"
                        active={location.pathname === "/contribute"}
                        // className="nav-link"
                    >
                        Contribute
                    </Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to="/projects"
                        active={location.pathname === "/projects"}
                        // className="nav-link"
                    >
                        Projects
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}