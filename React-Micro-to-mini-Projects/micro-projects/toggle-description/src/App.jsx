
import { useState } from 'react'
import './App.css'

function App() {

  const[show, setShow] = useState(false);
  return (
    <>
    <h2 style={{textAlign:'center'}}>What is MERN Stack?</h2>
    {show &&(
       <p>MERN Stack For MongoDb, Express js, React js, Node js. It is a Full-Stack javascript Solution.</p>
    )}
    <button onClick={()=>setShow(!show)}>
      {show?"Hide":"Show"}
    </button>
    </>
  )
}

export default App
