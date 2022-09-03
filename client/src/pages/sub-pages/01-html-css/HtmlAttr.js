import React from 'react';
import Card from 'react-bootstrap/Card'

export default function HtmlAttr() {
    return (
        <div id="html-attr">
            <h4>HTML Attributes</h4>
            <Card className="html-attr-card" style={{ border: '1px black solid', width: '250px'}}>
                <Card.Body className="sub-topic">
                    <Card.Title>
                        Attribute 1
                    </Card.Title>
                    <Card.Text>
                        Here is info about attribute 1
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};