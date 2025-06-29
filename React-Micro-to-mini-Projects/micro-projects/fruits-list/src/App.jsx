
import './App.css'

function App() {
  
  const Fruits = ["Apple", "Mango", "Banana", "Orange", "Guavava", "WaterMelon"];

  return (
    <>
      <h2 style={{textAlign:'center'}}>Fruits List</h2>
      <ol>
      {
        Fruits.map((fruit, index)=> (
          <li key={index}>{fruit}</li>
        ))
      }
      </ol>
    </>
  )
}

export default App
