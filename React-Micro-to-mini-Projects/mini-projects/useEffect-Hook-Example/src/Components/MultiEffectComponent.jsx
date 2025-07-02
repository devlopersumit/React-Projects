import React, { useEffect, useState } from 'react'

function MultiEffectComponent() {

    const[count, setCount] = useState(0);
    const[seconds, setSeconds] = useState(0);

    useEffect(()=> {
        console.log('Count Changed:', count);
    }, [count]);

    useEffect(() => {
        console.log('setInterval Started');
        
      const intervalId = setInterval(()=> {
        setSeconds(prevSeconds => prevSeconds +1);
      },1000)
    
      return () => {
        console.log('Time to Stop');
        
        clearInterval(intervalId);
      }
    }, [])

    //side-effect logic will run only when [count is changed]
    
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=> setCount(count+1)}>Increment Count</button>
    <h3>Seconds: {seconds}</h3>
    </>
  )
}

export default MultiEffectComponent