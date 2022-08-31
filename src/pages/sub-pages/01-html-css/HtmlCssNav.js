import React from 'react';

export default function HtmlCssNav({ currentSubTopic, handlePageChange }) {
    return (
        <div id="html-css-nav">
            <div>
                <h4>HTML & CSS Navigation</h4>
            </div>
            <div>
                <ul id="sub-topic-links">
                    <li className="subtopic-link">
                        <a
                            href="#cli-git"
                            onClick={() => handlePageChange('CliGit')}
                            className={currentSubTopic === 'CliGit' ? 'subtopic-text active' : 'subtopic-text'}
                        >
                                <p>CLI/GIT</p>
                        </a>
                    </li>
                    <li className="subtopic-link">
                        <a
                            href="#html-tags"
                            onClick={() => handlePageChange('HtmlTags')}
                            className={currentSubTopic === 'HtmlTags' ? 'subtopic-text active' : 'subtopic-text'}
                        >
                                <p>HTML Tags</p>
                        </a>
                    </li>
                    <li className="subtopic-link">
                        <a
                            href="#html-attr"
                            onClick={() => handlePageChange('HtmlAttr')}
                            className={currentSubTopic === 'HtmlAttr' ? 'subtopic-text active' : 'subtopic-text'}
                        >
                                <p>HTML Attributes</p>
                        </a>
                    </li>
                    <li className="subtopic-link">
                        <a
                            href="#css-style"
                            onClick={() => handlePageChange('CssStyle')}
                            className={currentSubTopic === 'CssStyle' ? 'subtopic-text active' : 'subtopic-text'}
                        >
                                <p>CSS Styling</p>
                        </a>
                    </li>
                    <li className="subtopic-link">
                        <a
                            href="#css-position"
                            onClick={() => handlePageChange('CssPosition')}
                            className={currentSubTopic === 'CssPosition' ? 'subtopic-text active' : 'subtopic-text'}
                        >
                                <p>CSS Positioning</p>
                        </a>
                    </li>
                    <li className="subtopic-link">
                        <a
                            href="#html-css-res"
                            onClick={() => handlePageChange('HtmlCssRes')}
                            className={currentSubTopic === 'HtmlCssRes' ? 'subtopic-text active' : 'subtopic-text'}
                        >
                                <p>HTML/CSS Resources</p>
                        </a>
                    </li>   
                </ul>
            </div>  
        </div>
    )
};