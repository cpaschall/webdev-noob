import React from "react";

export default function Toc({ currentTopic, handlePageChange }) {
    return (
        <div id="toc">
            <h3>Topics</h3>
            <ul>
                <li>
                    <a
                        href="#html-css"
                        onClick={() => handlePageChange('HtmlCss')}
                        className={currentTopic === 'HtmlCss' ? 'nav-link active' : 'nav-link'}
                    >
                            <p>HTML/CSS</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#adv-css"
                        onClick={() => handlePageChange('AdvCss')}
                        className={currentTopic === 'AdvCss' ? 'nav-link active' : 'nav-link'}
                    >
                            <p>Advanced CSS</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#javascript"
                        onClick={() => handlePageChange('Javascript')}
                        className={currentTopic === 'Javascript' ? 'nav-link active' : 'nav-link'}
                    >
                            <p>JavaScript</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}