import React, { useState } from 'react';

export default function Contribute() {

    const [category, setCategory] = useState('')
    const [topic, setTopic] = useState('');
    const [subtopic, setSubTopic] = useState('');
    const [info, setInfo] = useState('');

    const handleInputChange = (e) => {
        const  { target }  = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'category') {
            setCategory(inputValue);
        } else if (inputName === 'topic') {
            setTopic(inputValue);
        } else if (inputName === 'subtopic') {
            setSubTopic(inputValue);
        } else if (inputName === 'info') {
            setInfo(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(`Topic: ${topic}\nSub-Topic: ${subtopic}\nInfo: ${info}`);
        setTopic('');
        setSubTopic('');
        setInfo('');
    };

    return (
        <div id="contribute">
            <h1>Contribute</h1>
            <p>Contribute to this Project!</p>
            <form id="contr-form">
                <input
                    value={category}
                    name="category"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Category'
                    className="contr-input"
                />
                <input
                    value={topic}
                    name="topic"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Topic'
                    className="contr-input"
                />
                <input
                    value={subtopic}
                    name="subtopic"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Sub-Topic'
                    className="contr-input"
                />
                <textarea
                    value={info}
                    name="info"
                    onChange={handleInputChange}
                    type="textarea"
                    placeholder='Info'
                    className="contr-input"
                />
                <button id="contr-btn" type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}