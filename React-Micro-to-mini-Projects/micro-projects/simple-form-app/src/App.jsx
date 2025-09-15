import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
    setShowGreeting(false); // Hide greeting while typing
  };

  const handleBlur = () => {
    if (name.trim() !== "") {
      setShowGreeting(true); // Show greeting when input loses focus and name is not empty
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Simple Form App</h2>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter Your Name..."
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        {showGreeting && <p>Hello, {name}</p>}
      </div>
    </>
  )
}

export default App
