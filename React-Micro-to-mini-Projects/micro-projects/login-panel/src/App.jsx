
import { useState } from 'react'
import './App.css'

function App() {
const[Loggedin, setLoggedIn] = useState(false);
const[name, setName] = useState("");

const handleSubmit = (e)=> {
  e.preventDefault();
}
  return (
    <>
  <form onSubmit={handleSubmit}>
  <input type="text"
  placeholder='Enter Your Name'
  value={name}
  onChange={(e)=> setName(e.target.value)} /> <br /><br />
 <button onClick={()=> setLoggedIn(!Loggedin)}>{Loggedin? "Logout" : "Login" }</button>
 

 {
  Loggedin && <p>Welcome Back {name} !</p>
 }
 </form>
    </>
  )
}

export default App
