import { useState } from 'react'
import './App.css'

function App() {
const[darkMode, setDarkMode] = useState(false);

const toggleTheme = ()=> {
  setDarkMode(prev =>!prev)
}
  return (
    <>
    <div className={darkMode?'dark':'light'}>
    <button onClick={toggleTheme} style={{cursor:'pointer'}}>
     switch to {darkMode?'light':'dark'} mode
    </button>
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quam maiores voluptatem, aut repudiandae vero eos earum officiis impedit deserunt, adipisci neque accusamus hic itaque minima fuga dicta dolores at.
    Assumenda accusantium, ea neque tempora consectetur commodi, libero asperiores facilis a autem recusandae <br /> veritatis tenetur dolorem aliquid nam magnam vel ad animi illo soluta vitae alias sit nobis eaque! Natus?
    Tenetur nihil id iusto? Amet at commodi, <br /> delectus ex numquam libero, sapiente laudantium modi, dicta est quod a nisi. Accusantium quam recusandae ratione sunt nesciunt, vel unde laudantium? Doloribus, sapiente!
    Debitis, architecto. Autem aspernatur animi corrupti commodi possimus pariatur excepturi laboriosam eligendi dolorem ullam natus corporis quia alias porro at sequi debitis consectetur, perspiciatis ex. Deleniti consectetur molestiae quis quam!</h3>
    </div>
    </>
  )
}

export default App
