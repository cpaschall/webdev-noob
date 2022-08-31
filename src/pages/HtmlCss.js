import React, { useState } from 'react';
import CliGit from './sub-pages/01-html-css/CliGit';
import CssPosition from './sub-pages/01-html-css/CssPosition';
import CssStyle from './sub-pages/01-html-css/CssStyle';
import HtmlAttr from './sub-pages/01-html-css/HtmlAttr';
import HtmlCssRes from './sub-pages/01-html-css/HtmlCssRes';
import HtmlTags from './sub-pages/01-html-css/HtmlTags';
import HtmlCssNav from './sub-pages/01-html-css/HtmlCssNav'


export default function HtmlCss() {
    const [currentSubTopic, setCurrentSubTopic ] = useState('CliGit');

    const renderSubTopic = () => {
        if (currentSubTopic === 'CliGit') {
            return <CliGit />
        }
        if (currentSubTopic === 'CssPosition') {
            return <CssPosition />
        }
        if (currentSubTopic === 'CssStyle') {
            return <CssStyle />
        }
        if (currentSubTopic === 'HtmlAttr') {
            return <HtmlAttr />
        }
        if (currentSubTopic === 'HtmlCssRes') {
            return <HtmlCssRes />
        }
        if (currentSubTopic === 'HtmlTags') {
            return <HtmlTags />
        }
    };

    const handlePageChange = (subTopic) => setCurrentSubTopic(subTopic);
    return (
        <div id="html-css">
            <div>
                <h2>HTML and CSS Section</h2>
            </div>
            <div>
                <HtmlCssNav currentSubTopic={currentSubTopic} handlePageChange={handlePageChange} />
            </div>
            <div>
                {renderSubTopic()}
            </div>
        </div>
    )
}