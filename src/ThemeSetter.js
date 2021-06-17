import React, {useState, useEffect} from 'react';

export default function ThemeSetter() {
    const [darkTheme, setDarkTheme] = useState(true);

    useEffect(() => {
        localStorage.setItem('dark_theme', darkTheme);
    }, [darkTheme]);

    function handleToggleThemeClick() {
        setDarkTheme(!darkTheme);
        console.log('dark_theme set to: ' + darkTheme);
    }

    return <>
        <h2>Welcome</h2>
        <button onClick={handleToggleThemeClick}>Toggle Theme</button>
    </>;
}