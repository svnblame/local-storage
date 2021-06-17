import React, {useState, useEffect} from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(() => {
        const value = localStorage.getItem('counter');

        if (value === undefined) {
            return 0;
        } else {
            return Number.parseInt(value);
        }
    });

    useEffect(() => {
        localStorage.setItem('counter', counter);
    }, [counter]);

    function handleIncrementClick() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function handleDecrementClick() {
        setCounter(prevCounter => prevCounter - 1);
    }

    return <>
        <h2>{counter}</h2>
        <button className='ui-button' onClick={handleIncrementClick}>+</button>
        <button className='ui-botton' onClick={handleDecrementClick}>-</button>
    </>;
}
