import React, { useState } from 'react';
import Header from '../components/Header'
import HtmlCss from './HtmlCss';
import AdvCss from './AdvCss';
import Javascript from './Javascript';
import Toc from '../components/Toc';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';

export default function Home() {
    const [currentTopic, setCurrentTopic ] = useState('');

    const renderTopic = () => {
        if (currentTopic === '') {
            return <h3>Where would you like to begin?</h3> 
        }
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
        <>
            <Header />
            <div id="main-content">
                <Toc currentTopic={currentTopic} handlePageChange={handlePageChange} />
                <div id="content">
                    {/* <Header /> */}
                    {renderTopic()}
                </div>
            </div>
        </>
        
        // <div id="main-content">
        //     <Toc />
        //     <Router>
        //         <Routes>
        //             <Route path="/html-css" element={<HtmlCss />} className="content" />
        //         </Routes>
        //     </Router>
        // <div/>
    )
}
