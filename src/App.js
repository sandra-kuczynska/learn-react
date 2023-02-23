import React, { useState, useEffect } from 'react';
import './App.js';

const Timer = () => {
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [timerOn, setTimerOn] = useState(true)
    let timer

    useEffect(() => {

        if(timerOn) {
        timer = setInterval(() => {
            setSeconds(seconds + 1)
            if (seconds === 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        }, 1000)} else {
            clearInterval(timer)
        }
    

        return () => clearInterval(timer)
    });

    const stop=()=>{
        setTimerOn(false)
      clearInterval(timer);
    }

    const start=()=>{
        setTimerOn(true)
        timer()
    }

    return (
        <div className="container">
            <div className="timer">
            <h1>You clicked {count} times</h1>
            <button className="buttons" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <h2>Timer</h2>
            <span className="time">{minutes}:{seconds<10? "0"+seconds: seconds}</span>
            <button className="buttons buttons--stop" onClick={stop}>Stop</button>
            <button className="buttons buttons--start" onClick={start}>Start</button>
            </div>
        </div>
    );
}

export default Timer;
