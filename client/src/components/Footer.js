// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

export default function Navigate() {
    return (
        <Container fluid id="foot-cont">
            <div >
                <ul id="foot-links">
                    <li>
                        <a
                            href="https://linkedin.com/in/calvin-paschall"
                            className="foot-link"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/cpaschall"
                            className="foot-link"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/calpaschall/"
                            className="foot-link"
                        >
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    )
}