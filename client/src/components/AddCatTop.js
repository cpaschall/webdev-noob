import React, { useState } from "react";
import {Modal, Container, Button, Row, Col }from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AddCatTop(props) {
    const [showChoice, setShowCHoice] = useState("show-category");
    const handleChange = (choice) => setShowCHoice(choice);

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="modal-close">
                <Button onClick={() => handleChange("show-category")}>New Category</Button>
                <Button onClick={() => handleChange("show-topic")}>New Topic</Button>
            </Modal.Header>
            <Modal.Body>
                    {showChoice === "show-category" ? 
                        <Container>
                            <form>
                                <label>Category 1</label>
                                <input type="text"></input>
                                <label>Category 2</label>
                                <input type="text"></input>
                            </form>
                        </Container>
                        :
                        null                    
                    }
                    {showChoice === "show-topic" ?
                        <Container>
                            <form>
                                <label>Topic 1</label>
                                <input type="text"></input>
                                <label>Topic 2</label>
                                <input type="text"></input>
                            </form>
                        </Container>
                        :
                        null
                    }
            </Modal.Body>
        </Modal>
    )
 }