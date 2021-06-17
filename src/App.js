import { useState, useEffect } from 'react';
import ThemeSetter from './ThemeSetter';
import Counter from './Counter';
import './App.css';

function App() {
    const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem('dark_theme') === 'true');

    useEffect(() => {
        localStorage.setItem('dark_theme', darkTheme);
    }, [darkTheme]);

    function handleToggleThemeClick() {
        setDarkTheme(!darkTheme);
        console.log('dark_theme set to: ' + darkTheme);
    }

    return <>
        <div className={darkTheme ? 'dark' : 'light'}>
            <h2>Welcome</h2>
            <button onClick={handleToggleThemeClick}>Toggle Theme</button>
            <Counter />
        </div>
    </>;
}

export default App;
