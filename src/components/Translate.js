import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import axios from 'axios';

const defaultOption = {
    label: 'Select a language',
    value: 'af'
};

const Translate = () => {
    const [language, setLanguage] = useState(defaultOption);
    const [text, setText] = useState('');
    const [optionResult, setOptionResult] = useState([]);

    useEffect(() => {
        const getTranslateOptions = async () => {
            const { data } = await axios.get('https://translation.googleapis.com/language/translate/v2/languages', {
                params: {
                    target: 'en',
                    key: 'AIzaSyC-gIK3Okukol5oUa2GG7SUepWNZ6u0Gf0'
                }
            });
            const tempResult = data.data.languages;


            const languageItems = tempResult.map((result) => {
                let languageItem = {};
                languageItem['value'] = result.language;
                languageItem['label'] = result.name;

                return languageItem;
            });

            setOptionResult(languageItems);
            setLanguage(languageItems[0]);

        }
        getTranslateOptions();



    }, []);



    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label="Select a Language"  //把這個選單名稱傳進去，取代裡面hard coding的標題
                selected={language}
                onSelectedChange={setLanguage}
                options={optionResult}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert
                text={text}
                language={language}
            />
        </div>
    );
};

export default Translate;