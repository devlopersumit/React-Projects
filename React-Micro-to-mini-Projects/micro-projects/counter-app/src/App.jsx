import { useState } from "react"
function App() {
  const [count, setCount] = useState(0);

  function incrementValue() {
    setCount((prevCount)=> prevCount+1)
  }

  const decrementValue = ()=> {
    if(count>0){
    setCount((prevCount)=>prevCount-1)
    }
  }

  return (
    <>
      <div style={{display:'flex', gap:'40px', alignItems:'center', height:'100vh', marginLeft:'700px'}}>
        <button onClick={incrementValue} style={{width:'50px', height:'30px', borderRadius:"10px",cursor:'pointer'}}>+</button>
        <h3>{count}</h3>
        <button onClick={decrementValue} style={{width:'50px', height:'30px', borderRadius:"10px",cursor:'pointer'}}>-</button>
      </div>
    </>
  )
}

export default App
