
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const[time, setTime] = useState(0);
  let timer = useRef(null);
  
  const startTimer = ()=> {

    if (timer.current !== null) 
      return;

    timer.current = setInterval(() => {
      setTime(prevTime => prevTime+1)
    }, 1000);

  }

  const stopTimer = ()=> {
      clearInterval(timer.current)
      timer.current = null;
  }

  const resetTimer = ()=> {
    stopTimer();
     setTime(0);
  }

  return (
    <>
  <div>
    <h2>Stopwatch: {time} seconds</h2>

    <button onClick={startTimer}
    style={{marginRight:'10px'}}>Start</button>

    <button onClick={stopTimer}
    style={{marginRight:'10px'}}>Stop</button>

    <button onClick={resetTimer}
     style={{marginRight:'10px'}}>Reset</button>

  </div>
    </>
  )
}

export default App
