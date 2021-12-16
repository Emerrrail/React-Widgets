import React from "react";

const Link = ({ className, href, children, onSelectedChange, selectedLink }) => {
    

    const doRouting = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        //1. prevent full page reload
        event.preventDefault();
        //1. Change the URL
        window.history.pushState({}, '', href);
        //2. detect the URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        onSelectedChange(window.location.pathname);
        window.location.reload();
    };


    return (
        <a
            onClick={doRouting}
            className={`${className}${selectedLink === href ? ' active' : ''}`}
            href={href}
        >
            {children}
        </a>
    );
};

export default Link;