import './App.css';
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from './components/Route';
import Header from './components/Header';
import SearchPics from './components pics/SearchPics';
import SearchVideos from './components videos/SearchVideos';

const items = [
    {
        title: 'Search Terms',
        content: 'Searching on Wikipedia for a term'
    },
    {
        title: 'Search Pics',
        content: 'Searching for images on unsplash'
    },
    {
        title: 'Search Videos',
        content: 'Searching for videos on Youtube and Playing them with just one click'
    },
    {
        title: 'Translate',
        content: 'Translating input text based on the language selected'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];




export default () => {
    //Dropdown
    const [selected, setSelected] = useState(options[0]);  //default value就放進options的第一項

    return (

        <div>
            <div className="header">
                <Header />
            </div>
            <div className="container accordion">
                <Route path="/">
                    <Accordion items={items} />
                </Route>
            </div>
            <div className="container">
                <Route path="/searchterms">
                    <Search />
                </Route>
            </div>
            <div className="container">
                <Route path="/searchpics">
                    <SearchPics />
                </Route>
            </div>
            <div className="container">
                <Route path="/searchvideos">
                    <SearchVideos />
                </Route>
            </div>
            <div className="container">
                <Route path="/dropdown">
                    <Dropdown
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>
            </div>
            <div className="container">
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>
        </div>
    );
};