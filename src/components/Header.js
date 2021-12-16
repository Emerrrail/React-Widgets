import React, { useState, useEffect } from "react";
import Link from "./Link";

const Header = () => {
    const [selectedLink, setSelectedLink] = useState(window.location.pathname);

    useEffect(() => {
        //2. detect the URL has changed
        const onLocationChange = () => {
            //3. Route update piece of state
            setSelectedLink(window.location.pathname);
        };
        
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item" onSelectedChange={setSelectedLink} selectedLink={selectedLink}>
                Accordion
            </Link>
            <Link href="/searchterms" className="item" onSelectedChange={setSelectedLink} selectedLink={selectedLink}>
                Search Terms
            </Link>
            <Link href="/searchpics" className="item" onSelectedChange={setSelectedLink} selectedLink={selectedLink}>
                Search Pics
            </Link>
            <Link href="/searchvideos" className="item" onSelectedChange={setSelectedLink} selectedLink={selectedLink}>
                Search Videos
            </Link>
            <Link href="/translate" className="item" onSelectedChange={setSelectedLink} selectedLink={selectedLink}>
                Translate
            </Link>
        </div>
    );
};

export default Header;