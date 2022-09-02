// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

export default function Navigate({ currentPage, handlePageChange }) {
    const location = useLocation();
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
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
                        
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/about"
                        active={location.pathneame === "/about"}
                    >
                        About
                    </Nav.Link>
                    <Nav.Link href="#connect">Connect</Nav.Link>
                    <Nav.Link href="#contribute">Contribute</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}