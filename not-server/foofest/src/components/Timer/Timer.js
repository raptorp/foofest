import React, { useState, useEffect } from 'react';
import styles from "./Timer.module.css"

function Timer() {
  const [seconds, setSeconds] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    // Decrease the timer every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer when the component is unmounted or seconds reach 0
    return () => clearInterval(timer);
  }, []);

  // Convert remaining seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className={styles.timer}>
      {minutes}:{remainingSeconds < 10 ? '0' : ''}
      {remainingSeconds}
    </div>
  );
}

export default Timer;