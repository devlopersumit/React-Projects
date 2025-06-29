import { useState } from 'react'
import './App.css'

function App() {
  const[text, setText] = useState('');
  const[error, setError] = useState('');
  const[email, setEmail] = useState('');

  const handleSubmit = ()=> {
     if(text.trim() == ''){
      setError('Name is Required');
     }
     if(!email) {
      setError('Email is required');
     } else if(!email.includes('@')) {
     setError('Email is not valid');
     }
  }

  return (
    <>
    <div className="main">
      <form onSubmit={handleSubmit}>
         <input type="text"
         placeholder='Enter Your Name'
         required
         value={text}
         onChange={(e)=> setText(e.target.value)}
          />
          {(text.trim() !== '')? 
            <p style={{color:'red'}}>{error}</p>:null}
   <br /> <br />
          <input type="email"
          placeholder='Enter Your Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <br /><br />

          <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App
