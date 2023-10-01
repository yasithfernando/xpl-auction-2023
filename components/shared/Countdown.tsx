"use client"

import { useEffect, useState } from "react";
function Countdown(){

  const formatTime = (time:any) => {
    return time < 10 ? `0${time}` : time;
  };
  

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Target date: 23/10/2023
    const targetDate:any = new Date('2023-10-23T00:00:00Z');
    const currentDate:any = new Date();

    // Calculate the difference in seconds
    const initialDuration = Math.floor((targetDate - currentDate) / 1000);
    setTimeLeft(initialDuration);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="countdown-timer">
      <div className="flex flex-row justify-center text-center font-radley text-heading2-normal text-light-2">
        <div className="days countdown-box">
          <p>{formatTime(days)}</p>
        </div>
        <div className="hours countdown-box">
          <p>{formatTime(hours)}</p>
        </div>
        <div className="minutes countdown-box">
          <p>{formatTime(minutes)}</p>
        </div>
        <div className="seconds countdown-box">
          <p>{formatTime(seconds)}</p>
        </div>
      </div>
    </div>
  );
};


export default Countdown;