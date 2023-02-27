import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval;
        if (timerOn) {
            interval = setInterval(() => {
                setSeconds(seconds + 1)
            }, 1000);
        } else if (!timerOn) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [timerOn, seconds]
    );

    const formatTime = (totalSeconds) => {
        let totalMinutes = Math.floor(totalSeconds / 60);
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
        let sec = totalSeconds % 60;

        return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${sec < 10 ? '0' + sec : sec}`
    }

    const timerToggle = timerOn ? "Stop" : "Start"

    const changeTimerOn = () => {
        setTimerOn(!timerOn);
      };

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
                    <button className="buttons buttons--start-stop" onClick={changeTimerOn}>{timerToggle}</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
