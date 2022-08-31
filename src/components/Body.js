import React, { useState } from 'react';
import HtmlCss from '../pages/HtmlCss';
import AdvCss from '../pages/AdvCss';
import Javascript from '../pages/Javascript';
import Toc from './Toc';
// import Header from './Header';

export default function Body() {
    const [currentTopic, setCurrentTopic ] = useState('HtmlCss');

    const renderTopic = () => {
        if (currentTopic === 'HtmlCss') {
            return <HtmlCss />
        }
        if (currentTopic === 'AdvCss') {
            return <AdvCss />
        }
        if (currentTopic === 'Javascript') {
            return <Javascript />
        }
    };

    const handlePageChange = (topic) => setCurrentTopic(topic);

    return (
        <div id="main-content">
            <Toc currentTopic={currentTopic} handlePageChange={handlePageChange} />
            <div id="content">
                {/* <Header /> */}
                {renderTopic()}
            </div>
        </div>
    )
}
