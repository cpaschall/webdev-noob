import React from 'react';
import Card from 'react-bootstrap/Card';
import h1El from '../../../images/01-htmlTags/h1Tags.png';
import h1ElOut from '../../../images/01-htmlTags/h1TagsOutput.png'

export default function HtmlTags() {
    return (
        <div id="html-tags">
            {/* <h4>HTML Tags</h4> */}
            <Card className="html-tag-card" style={{ border: '1px black solid', width: '250px'}}>
                <Card.Body className="sub-topic">
                    <Card.Title>
                        Header Tags
                    </Card.Title>
                    <Card.Text>
                        Header tags....
                        
                    </Card.Text>
                    <img src={h1El} alt="" />
                    <img src={h1ElOut} alt="" />
                </Card.Body>
            </Card>
            <Card className="html-tag-card" style={{ border: '1px black solid', width: '250px'}}>
                <Card.Body className="sub-topic">
                    <Card.Title>
                        Header Tags
                    </Card.Title>
                    <Card.Text>
                        Header tags....
                        
                    </Card.Text>
                    <img src={h1El} alt="" />
                    <img src={h1ElOut} alt="" />
                </Card.Body>
            </Card>
            <Card className="html-tag-card" style={{ border: '1px black solid', width: '250px'}}>
                <Card.Body className="sub-topic">
                    <Card.Title>
                        Header Tags
                    </Card.Title>
                    <Card.Text>
                        Header tags....
                        
                    </Card.Text>
                    <img src={h1El} alt="" />
                    <img src={h1ElOut} alt="" />
                </Card.Body>
            </Card>
            <Card className="html-tag-card" style={{ border: '1px black solid', width: '250px'}}>
                <Card.Body className="sub-topic">
                    <Card.Title>
                        Header Tags
                    </Card.Title>
                    <Card.Text>
                        Header tags....
                        
                    </Card.Text>
                    <img src={h1El} alt="" />
                    <img src={h1ElOut} alt="" />
                </Card.Body>
            </Card>
        </div>
    )
};