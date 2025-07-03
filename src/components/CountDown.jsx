// import React, { useEffect, useState } from 'react';
// import './Countdown.css';

// const Countdown = () => {
//   const targetDate = new Date('2025-07-12T08:00:00').getTime();
//   const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

//   function getTimeRemaining() {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     if (difference <= 0) return null;

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(getTimeRemaining());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="countdown-section">
//       <div className="countdown-container">
//         <h2>🗳️ Countdown to Election Day</h2>
//         {timeLeft ? (
//           <div className="countdown-inline">
//             <h4>🕒 July 12, 2025</h4>
//             <div className="inline-timer">
//               <span>{timeLeft.days}d</span>
//               <span>{timeLeft.hours}h</span>
//               <span>{timeLeft.minutes}m</span>
//               <span>{timeLeft.seconds}s</span>
//             </div>
//           </div>
//         ) : (
//           <p className="election-day">It’s Election Day — go out and vote!</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Countdown;



import React, { useEffect, useState } from 'react';
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
    <section className="countdown-section">
      <div className="countdown-container">
        <h2>🗓️ Countdown to Election Day</h2>
        {timeLeft ? (
          <>
            <h4>🕒 July 12, 2025 – Let’s show up for Ijede!</h4>
            <div className="inline-timer">
              <span data-label="Days">{timeLeft.days}</span>
              <span data-label="Hours">{timeLeft.hours}</span>
              <span data-label="Minutes">{timeLeft.minutes}</span>
              <span data-label="Seconds">{timeLeft.seconds}</span>
            </div>
          </>
        ) : (
          <p className="election-day">It’s Election Day — go out and vote!</p>
        )}
      </div>
    </section>
  );
};

export default Countdown;
