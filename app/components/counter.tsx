"use client"
import React from 'react'

const counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>Clicked {count}</button>
    )
}

export default counter;
