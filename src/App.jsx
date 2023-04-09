import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Carousel from './Carousel/Carousel'
import { Navbar, Footer } from './components'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element= {<Home />} />
        <Route path = "*" element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
    {/* <Footer /> */}
    </>
  )
}

export default App
