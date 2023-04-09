import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Carousel from './Carousel/Carousel'
import { Navbar } from './components'
import Home from './pages/Home/Home'



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element= {<Home />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
