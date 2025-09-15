
import { useState } from 'react'
import './App.css'

function App() {
const[username, setUsername] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');
const[error, setError] = useState('');
const[success, setSuccess] = useState('');

let valid = true;

const handleSubmit = (e)=> {
  e.preventDefault();
   
  if(username.trim() == "") {
    setError("Username is Required");
    setSuccess("");
    valid = false;
  }

  if(!email || !email.includes("@")) {
    setError("Email is Required");
    setSuccess("");

    valid = false;
  }

  if(password.length<5) {
    setError("Password length must be atleast 5 characters");
    setSuccess("");

    valid = false;
  }

  if(!password) {
    setError('Password is Required');
    setSuccess('');
  }

  if(valid) {
    setSuccess('Form Submitted Successfully...');
    setError('');
    alert('Thank You For Submitting The Form!');
  }
  
}

  return (
    <>
     <div style={{
      minWidth:'100%',
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
     }}>

      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}
      style={{
          minwidth:'1000px',
          minheight:'500px'
        }}>
        <input type="text"
        placeholder='Enter Your Username...'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        style={{
          minWidth:'250px',
          height:'30px',
          border:'1px solid #1f1f1f',
          borderRadius:'10px',
          padding:'10px'
        }} />
        <br /><br />

        <input type="email" 
        placeholder='Enter Your Email...'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
        style={{
          minWidth:'250px',
          height:'30px',
          border:'1px solid #1f1f1f',
          borderRadius:'10px',
          padding:'10px'
        }}/>
        <br /><br />

        <input type="password"
        placeholder='Enter Your Password...'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        style={{
          minWidth:'250px',
          height:'30px',
          border:'1px solid #1f1f1f',
          borderRadius:'10px',
          padding:'10px'
        }} />
        <br /><br />

        <button type="submit">Sign Up</button>
      </form>

      <div style={{
        marginTop:'20px',
        fontSize:'1rem',
        color:'red'
      }}>
  {
    error && <p>{error}</p>
  }
</div>
<div style={{
  marginTop:'20px',
  fontSize:'1rem',
  color:'green'
}}>
  {
    success && <p>{success}</p>
  }
  </div>
      

     </div>

    </>
  )
}

export default App
