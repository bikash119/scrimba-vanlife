import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route,Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import './App.css'
import "./server"



function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/">#VANLIFE</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}
createRoot(document.getElementById('root')).render(
  <App />
)
