import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Timer.css';


function Timer({duration}) {
    const [playing, setPlaying] = useState(false);
    const [timerKey, setTimerKey] = useState(1);

    const timerDuration = duration;
    const stratTime = Date.now() / 1000;
    const endTime = stratTime + timerDuration;
    const remainingTime = endTime - stratTime;
    const minuteSeconds = 60;


    const getTimeSeconds = time => (minuteSeconds - time) | 0;
    const getTimeMinutes = time => (time / minuteSeconds) | 0;

    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };

    const timerProps = {
        isPlaying: playing,
        size: 120,
        strokeWidth: 6,
        colors: [["#004225"]]
    };

    const handleResetClick = () => {
        setTimerKey(timerKey + 1);
        setPlaying(false);
    }

    return (
        <Container>
            <Row className="timer" key={timerKey}>
                {/* minutes */}
                <CountdownCircleTimer
                    onComplete={() => window.alert("Time for a break")}
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
            </Row>
            <Row>
                <Button onClick={() => setPlaying(true)}>Start</Button>
                <Button onClick={() => setPlaying(false)}>Pause</Button>
                <Button onClick={handleResetClick}>Reset</Button>

            </Row>
        </Container>
    )
}

export default Timer;
