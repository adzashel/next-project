"use client"
import React from 'react'

const counter = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>Clicked {count}</button>
    )
}

export default counter;
