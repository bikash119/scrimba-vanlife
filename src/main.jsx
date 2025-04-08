import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route,Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Host from './pages/Host/Host'
import Vans from './pages/Van/Vans'
import VanDetail from './pages/Van/VanDetail'
import Layout from './components/Layout/Layout'
import './App.css'
import "./server"
import HostLayout from './components/Layout/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVanDetailLayout from './components/Layout/HostVanDetailLayout'
import HostVanInfo from './pages/Host/HostVan/HostVanInfo'
import HostVanPrice from './pages/Host/HostVan/HostVanPrice'
import HostVanPhotos from './pages/Host/HostVan/HostVanPhotos'

function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<HostVanInfo />} />
              <Route path="price" element={<HostVanPrice />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>          
          </Route>          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
createRoot(document.getElementById('root')).render(
  <App />
)
