// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, useLocation } from 'react-router-dom';

export default function Toc({ currentCategory, handlePageChange }) {
    return (
        // <Navbar id="toc">
        //     <Container>
        //         <h3>Categorys</h3>
        //         <Nav>
        //             <Nav.Link
        //                 as={Link}
        //                 to="/html-css"
        //                 active={location.pathname === "/html-css"}
        //                 className={active ? 'nav-link active': 'nav-link'}
        //             >
        //                 HTML/CSS
        //             </Nav.Link>

        //         </Nav>
        //     </Container>

        // </Navbar>
        <div id="toc">
            <h3>Categories</h3>
            <ul id="category-links">
                <li>
                    <a
                        href="#html-css"
                        onClick={() => handlePageChange('HtmlCss')}
                        className={currentCategory === 'HtmlCss' ? 'category-link active' : 'category-link'}
                    >
                        HTML/CSS
                    </a>
                </li>
                <li>
                    <a
                        href="#adv-css"
                        onClick={() => handlePageChange('AdvCss')}
                        className={currentCategory === 'AdvCss' ? 'category-link active' : 'category-link'}
                    >
                        Advanced CSS
                    </a>
                </li>
                <li>
                    <a
                        href="#javascript"
                        onClick={() => handlePageChange('Javascript')}
                        className={currentCategory === 'Javascript' ? 'category-link active' : 'category-link'}
                    >
                        JavaScript
                    </a>
                </li>
            </ul>
        </div>
    )
}