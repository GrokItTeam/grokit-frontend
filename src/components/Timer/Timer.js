import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer({ duration }) {
  const [playing, setPlaying] = useState(false);
  const [timerKey, setTimerKey] = useState(1);

  const timerDuration = duration;
  const stratTime = Date.now() / 1000;
  const endTime = stratTime + timerDuration;
  const remainingTime = endTime - stratTime;
  const minuteSeconds = 60;

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => (time / minuteSeconds) | 0;

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
    strokeWidth: 8,
    colors: [["#193654"], ["#6babff"]],
  };

  const handleResetClick = () => {
    setTimerKey(timerKey + 1);
    setPlaying(false);
  };

  return (
    <Container>
      <Row className="timer" key={timerKey}>
        <div
          className="timer-circle">
          <CountdownCircleTimer
            onComplete={() => window.alert("Time for a break")}
            {...timerProps}
            duration={timerDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime }) =>
              renderTime("minutes", getTimeMinutes(timerDuration - elapsedTime))
            }
          </CountdownCircleTimer>
        </div>
        <div
          className="timer-circle">
            <CountdownCircleTimer
          className="timer-circle"
          {...timerProps}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
          </div>
        
      </Row>
      <Row className="button-row">
        <Button className="timer-button" onClick={() => setPlaying(true)}>
          Start
        </Button>
        <Button className="timer-button" onClick={() => setPlaying(false)}>
          Pause
        </Button>
        <Button className="timer-button" onClick={handleResetClick}>
          Reset
        </Button>
      </Row>
    </Container>
  );
}

export default Timer;
