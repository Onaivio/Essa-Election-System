import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carousel from './Carousel/Carousel'
import { Navbar } from './components'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Carousel/>
    </BrowserRouter>
    
  )
}

export default App
