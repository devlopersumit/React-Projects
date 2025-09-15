import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";

    if(numberAllowed) {
      str+= "0123456789";
    }
    if(charAllowed) {
      str+= "~!@#$%^&*()_";
    }

    for (let i =1; i <=length; i++){
      const char = Math.floor(Math.random()*str.length+1);
      
      pass+= str.charAt(char);
     
    }

    const copyPasswordToClipBoard = useCallback(()=> {
      passwordRef.current?.select();
         window.navigator.clipboard.writeText(password);
    }, [password])

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=> {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div>
      <h1 className=''>Password Generator</h1>
      <div>
        <input 
        type="text"
        placeholder='Enter Password'
        value={password}
        readOnly
        ref={passwordRef} />

        <button onClick={copyPasswordToClipBoard}>Copy</button>
      </div>

      
      <div>
          <input 
          type="range" 
          min={6} 
          max={20}
          value={length}
          onChange={(e)=> {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        
        
        <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={()=> {
          setNumberAllowed((prev)=> !prev)
        }} />
           <label>Numbers</label>
      
        <input 
        type="checkbox"
        defaultChecked = {charAllowed}
        id='characterInput'
        onChange={()=> {
          setCharAllowed((prev)=> !prev)
        }} />
        <label>Characters</label>
           </div>
       </div> 
    </>
  )
}

export default App
