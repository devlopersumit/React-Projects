import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {
  return (
    <>
    <Navbar />
    <div className="pt-16">
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </div>
    </>
  )
}

export default App;