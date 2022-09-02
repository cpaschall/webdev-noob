import React, { useState } from 'react';
import HtmlCss from './HtmlCss';
import AdvCss from './AdvCss';
import Javascript from './Javascript';
import Toc from '../components/Toc';
// import Header from './Header';

export default function Home() {
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
