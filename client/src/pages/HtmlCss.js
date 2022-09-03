import React, { useState } from 'react';
import CliGit from './sub-pages/01-html-css/CliGit';
import CssPosition from './sub-pages/01-html-css/CssPosition';
import CssStyle from './sub-pages/01-html-css/CssStyle';
import HtmlAttr from './sub-pages/01-html-css/HtmlAttr';
import HtmlCssRes from './sub-pages/01-html-css/HtmlCssRes';
import HtmlTags from './sub-pages/01-html-css/HtmlTags';
import HtmlCssNav from './sub-pages/01-html-css/HtmlCssNav'


export default function HtmlCss() {
    const [currentTopic, setCurrentTopic ] = useState('CliGit');

    const renderTopic = () => {
        if (currentTopic === 'CliGit') {
            return <CliGit />
        }
        if (currentTopic === 'CssPosition') {
            return <CssPosition />
        }
        if (currentTopic === 'CssStyle') {
            return <CssStyle />
        }
        if (currentTopic === 'HtmlAttr') {
            return <HtmlAttr />
        }
        if (currentTopic === 'HtmlCssRes') {
            return <HtmlCssRes />
        }
        if (currentTopic === 'HtmlTags') {
            return <HtmlTags />
        }
    };

    const handlePageChange = (topic) => setCurrentTopic(topic);
    return (
        <div id="html-css">
            <div>
                <h2>HTML and CSS Section</h2>
            </div>
            <div>
                <HtmlCssNav currentTopic={currentTopic} handlePageChange={handlePageChange} />
            </div>
            <div>
                {renderTopic()}
            </div>
        </div>
    )
}