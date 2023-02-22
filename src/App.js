import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    let timer

    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1)
            if (seconds === 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        }, 1000)

        return () => clearInterval(timer)
    });

    const stop=()=>{
      clearInterval(timer);
    }

    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <h2>Timer</h2>
            <span>{minutes}:{seconds<10? "0"+seconds: seconds}</span>
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export default Timer;
