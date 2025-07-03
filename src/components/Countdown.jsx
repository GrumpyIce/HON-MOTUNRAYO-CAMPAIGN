import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const targetDate = new Date('2025-07-12T08:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-modern" id="countdown">
      <div className="countdown-container">
        <h2>📅 Countdown to Election Day</h2>
        <p className="subtitle">🗳️ July 12, 2025 – Let’s show up for Ijede!</p>
        {timeLeft ? (
          <div className="timer-box">
            <div className="time-unit">
              <div className="time">{timeLeft.days}</div>
              <div className="label">Days</div>
            </div>
            <div className="time-unit">
              <div className="time">{timeLeft.hours}</div>
              <div className="label">Hours</div>
            </div>
            <div className="time-unit">
              <div className="time">{timeLeft.minutes}</div>
              <div className="label">Minutes</div>
            </div>
            <div className="time-unit">
              <div className="time">{timeLeft.seconds}</div>
              <div className="label">Seconds</div>
            </div>
          </div>
        ) : (
          <p>🎉 It’s Election Day — go out and vote!</p>
        )}
      </div>
    </section>
  );
};

export default Countdown;
