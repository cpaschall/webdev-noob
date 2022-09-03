// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, useLocation } from 'react-router-dom';

export default function Toc({ currentTopic, handlePageChange }) {
    return (
        // <Navbar id="toc">
        //     <Container>
        //         <h3>Topics</h3>
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
            <h3>Topics</h3>
            <ul id="topic-links">
                <li>
                    <a
                        href="#html-css"
                        onClick={() => handlePageChange('HtmlCss')}
                        className={currentTopic === 'HtmlCss' ? 'topic-link active' : 'topic-link'}
                    >
                        HTML/CSS
                    </a>
                </li>
                <li>
                    <a
                        href="#adv-css"
                        onClick={() => handlePageChange('AdvCss')}
                        className={currentTopic === 'AdvCss' ? 'topic-link active' : 'topic-link'}
                    >
                        Advanced CSS
                    </a>
                </li>
                <li>
                    <a
                        href="#javascript"
                        onClick={() => handlePageChange('Javascript')}
                        className={currentTopic === 'Javascript' ? 'topic-link active' : 'topic-link'}
                    >
                        JavaScript
                    </a>
                </li>
            </ul>
        </div>
    )
}