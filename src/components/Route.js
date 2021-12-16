import { useState, useEffect } from "react";


const Route = ({ path, children }) => {    //在App.js裡面，包在Route裡的component就是children
    const [currentPath,setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        //2. detect the URL has changed
        const onLocationChange = () => {
            //3. Route update piece of state
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path
        ? children
        : null;
};

export default Route;