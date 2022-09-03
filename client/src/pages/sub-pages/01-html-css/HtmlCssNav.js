import React from 'react';

export default function HtmlCssNav({ currentTopic, handlePageChange }) {
    return (
        <div id="html-css-nav">
            <div>
                <h4>HTML & CSS Navigation</h4>
            </div>
            <div>
                <ul id="topic-links">
                    <li className="topic-link">
                        <a
                            href="#cli-git"
                            onClick={() => handlePageChange('CliGit')}
                            className={currentTopic === 'CliGit' ? 'topic-text active' : 'topic-text'}
                        >
                                <p>CLI/GIT</p>
                        </a>
                    </li>
                    <li className="topic-link">
                        <a
                            href="#html-tags"
                            onClick={() => handlePageChange('HtmlTags')}
                            className={currentTopic === 'HtmlTags' ? 'topic-text active' : 'topic-text'}
                        >
                                <p>HTML Tags</p>
                        </a>
                    </li>
                    <li className="topic-link">
                        <a
                            href="#html-attr"
                            onClick={() => handlePageChange('HtmlAttr')}
                            className={currentTopic === 'HtmlAttr' ? 'topic-text active' : 'topic-text'}
                        >
                                <p>HTML Attributes</p>
                        </a>
                    </li>
                    <li className="topic-link">
                        <a
                            href="#css-style"
                            onClick={() => handlePageChange('CssStyle')}
                            className={currentTopic === 'CssStyle' ? 'topic-text active' : 'topic-text'}
                        >
                                <p>CSS Styling</p>
                        </a>
                    </li>
                    <li className="topic-link">
                        <a
                            href="#css-position"
                            onClick={() => handlePageChange('CssPosition')}
                            className={currentTopic === 'CssPosition' ? 'topic-text active' : 'topic-text'}
                        >
                                <p>CSS Positioning</p>
                        </a>
                    </li>
                    <li className="topic-link">
                        <a
                            href="#html-css-res"
                            onClick={() => handlePageChange('HtmlCssRes')}
                            className={currentTopic === 'HtmlCssRes' ? 'topic-text active' : 'topic-text'}
                        >
                                <p>HTML/CSS Resources</p>
                        </a>
                    </li>   
                </ul>
            </div>  
        </div>
    )
};