import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [timerOn, setTimerOn] = useState(true)

    useEffect(() => {

        if (timerOn) {
            setInterval(() => {
                setSeconds(seconds + 1)

            }, 1000)
        } else {
            clearInterval()
        }


        return () => clearInterval()
    });

    const stop = () => {
        setTimerOn(false)
        clearInterval();
    }

    const start = () => {
        setTimerOn(true)
    }

    const formatTime = (totalSeconds) => {
        let totalMinutes = Math.floor(totalSeconds / 60);
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
        let sec = totalSeconds % 60;

        return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${sec < 10 ? '0' + sec : sec}`
    }

    return (
        <div className="container">
            <div className="timer">
            <h1 className="header">Timer App</h1>
            <button className="buttons buttons--click" onClick={() => setCount(count + 1)}>
                    Click me
                </button>
                <p className="title">You clicked <span className="count">{count}</span> times</p>
                
                <p className="title title--margin-top">Timer</p>
                <span className="time">{formatTime(seconds)}</span>
                <div className="button-box">
                    <button className="buttons buttons--stop" onClick={stop}></button>
                    <button className="buttons buttons--start" onClick={start}></button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
