import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Timer.css';

const minuteSeconds = 60;

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
    colors: [["#004225"]]
};

const getTimeSeconds = time => (minuteSeconds - time) | 0;
const getTimeMinutes = time => (time / minuteSeconds) | 0;

function Timer() {
    const timerDuration = 1500;
    const stratTime = Date.now() / 1000;
    const endTime = stratTime + timerDuration;
    const remainingTime = endTime - stratTime;

    return (
        <div className="timer">
            {/* minutes */}
            <CountdownCircleTimer
                {...timerProps}
                duration={timerDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime }) =>
                    renderTime(
                        "minutes",
                        getTimeMinutes(timerDuration - elapsedTime)
                    )
                }
            </CountdownCircleTimer>
            {/* seconds */}
            <CountdownCircleTimer
                {...timerProps}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
            >
                {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>
        </div >
    )
}

export default Timer;
