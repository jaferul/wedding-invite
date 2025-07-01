import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // Or set to zeros
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    let frameId;

    const update = () => {
      setTimeLeft(calculateTimeLeft());
      frameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!timeLeft) return <div>The countdown has ended!</div>;

  return (
    <div
      style={{
        fontSize: "24px",
        fontFamily: `'Nunito Sans', sans-serif`,
        color: "#FFF",
        fontWeight: "bold",
        position: "relative",
      }}
    >
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

export default CountdownTimer;
