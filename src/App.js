import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [timerOn, setTimerOn] = useState(true)

    useEffect(() => {

        if(timerOn) {
        setInterval(() => {
            setSeconds(seconds + 1)
            
        }, 1000)} else {
            clearInterval()
        }
    

        return () => clearInterval()
    });

    const stop=()=>{
        setTimerOn(false)
      clearInterval();
    }

    const start=()=>{
        setTimerOn(true)
    }

    const formatTime = (seconds) => {
        let minutes = parseInt(seconds / 60)
        let sec = seconds < 60 ? seconds : (seconds - (60*minutes))

        return `${minutes < 10 ? '0' + minutes: minutes} : ${sec < 10 ? '0' + sec : sec}`
    }

    return (
        <div className="container">
            <div className="timer">
            <h1>You clicked {count} times</h1>
            <button className="buttons" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <h2>Timer</h2>
            <span className="time">{formatTime(seconds)}</span>
            <button className="buttons buttons--stop" onClick={stop}>Stop</button>
            <button className="buttons buttons--start" onClick={start}>Start</button>
            </div>
        </div>
    );
}

export default Timer;
