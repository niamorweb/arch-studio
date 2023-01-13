import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <BrowserRouter >
    <div className="App">
      <Header />
    <Routes >
      <Route path='/arch-studio/' element={<Home />}/>
      <Route path='/arch-studio/portfolio' element={<Portfolio />}/>
      <Route path='/arch-studio/about-us' element={<AboutUs />}/>
      <Route path='/arch-studio/contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
     
  )
}

export default App
