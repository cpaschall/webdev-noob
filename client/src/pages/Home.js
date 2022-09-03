import React, { useState } from 'react';
import Header from '../components/Header'
import HtmlCss from './HtmlCss';
import AdvCss from './AdvCss';
import Javascript from './Javascript';
import Toc from '../components/Toc';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';

export default function Home() {
    const [currentCategory, setCurrentCategory ] = useState('');

    const renderCategory = () => {
        if (currentCategory === '') {
            return <h3>Where would you like to begin?</h3> 
        }
        if (currentCategory === 'HtmlCss') {
            return <HtmlCss />
        }
        if (currentCategory === 'AdvCss') {
            return <AdvCss />
        }
        if (currentCategory === 'Javascript') {
            return <Javascript />
        }
    };

    const handlePageChange = (Category) => setCurrentCategory(Category);

    return (
        <>
            <Header />
            <div id="main-content">
                <Toc currentCategory={currentCategory} handlePageChange={handlePageChange} />
                <div id="content">
                    {/* <Header /> */}
                    {renderCategory()}
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
