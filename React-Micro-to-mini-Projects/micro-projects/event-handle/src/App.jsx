
import { useState } from 'react'
import './App.css'

function App() {
const[name, setName] = useState("");
const[age, setAge] = useState();

const handleSubmit = (e)=> {
  e.preventDefault();
}

  return (
    <>
 <form onSubmit={handleSubmit}>
  <input type="text"
  placeholder='Enter Your Name'
  value={name}
  onChange={(e)=> setName(e.target.value)}
   />
  <br /><br />
   <input type="number"
   placeholder='Enter Your age' 
   value={age}
   onChange={(e)=> setAge(e.target.value)}/>
   <br /><br />

   <button type='submit'>Submit</button>
 </form>

 <p>Hey, My name is {name} and my age is {age}</p>
    </>
  )
}

export default App
