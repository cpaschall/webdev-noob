import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddCatTop from './AddCatTop'

export default function Header() {
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (
        <div id="welcome">
            <h1>Let's Learn Web Development Together!</h1>
            <Button variant="primary" onClick={handleShow}>Create</Button>
            <AddCatTop
                show={modalShow}
                onHide={handleClose}
            />
            {/* <h3>Where would you like to begin?</h3> */}
        </div>
    )
}