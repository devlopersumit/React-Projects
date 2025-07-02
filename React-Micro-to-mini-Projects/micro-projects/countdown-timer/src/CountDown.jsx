import React, { useState, useEffect } from "react";

function CountDown() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer === 0) return; 

    const countTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countTimer);
    };
  }, [timer]);

  return (
    <>
      <h2>Time Remaining: {timer}</h2>
      {timer === 0 && <p>Time's Up!</p>}
    </>
  );
}

export default CountDown;
