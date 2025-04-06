import { useState,useEffect } from 'react'
import Card from '../components/Card/Card'

export default function Vans() {
    const [vans,setVans] = useState([])
    useEffect(() => {(async () => {
        const res = await fetch('/api/vans')
        const data = await res.json()
        setVans(data.vans)
    })();},[])
    
    console.log(vans)
    const vanElements = vans.map(van => (
        <Card key={van.id} {...van} />
    ))
    return (
      <main>
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vanElements}
        </div>
      </main>
    )
  }