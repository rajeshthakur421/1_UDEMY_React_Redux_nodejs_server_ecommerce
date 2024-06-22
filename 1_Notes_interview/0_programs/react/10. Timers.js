import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      // Optionally, add logic for when countdown completes
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(initialTime);
  };

  // Format time into HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <p>{formatTime(timeLeft)}</p>
        {!isActive && timeLeft === initialTime && (
          <button onClick={handleStart}>Start</button>
        )}
        {isActive && <button onClick={handlePause}>Pause</button>}
        {!isActive && timeLeft < initialTime && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
