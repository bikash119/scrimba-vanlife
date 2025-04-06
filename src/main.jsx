import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route,Link } from 'react-router'
import { About, Home } from './App.jsx'
import './App.css'


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
      </Routes>
    </BrowserRouter>
  )
}
createRoot(document.getElementById('root')).render(
  <App />
)
