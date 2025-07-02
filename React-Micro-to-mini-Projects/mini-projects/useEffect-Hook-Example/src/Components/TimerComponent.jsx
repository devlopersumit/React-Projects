import React, { useState, useEffect } from 'react'

function TimerComponent() {

    const[seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds +1);
      },1000);
    
      return () => {
        console.log('Time to Stop');
        
        clearInterval(intervalId);
      }
    }, [])

    //it will run only on first render
    
  return (
    <h1>Seconds: {seconds}</h1>
  )
}

export default TimerComponent