import { useState,useEffect } from 'react'
import { useSearchParams,Link } from 'react-router'

import Card from '../../components/Card/Card'

export default function Vans() {
    const [vans,setVans] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    useEffect(() => {(async () => {
        const res = await fetch('/api/vans')
        const data = await res.json()
        setVans(data.vans)
    })();},[])
    
    const vanElements = vans
      .filter(van => typeFilter ? van.type === typeFilter : true)
      .map(van => (
          <Card key={van.id} {...van} />
      ))
    return (
      <main>
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button onClick={() => setSearchParams({type: "simple"})}>Simple</button>
            <button onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
            <button onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
            <button onClick={() => setSearchParams({})}>Clear filters</button>
        </div>
        <div className="van-list">
            {vanElements}
        </div>
      </main>
    )
  }