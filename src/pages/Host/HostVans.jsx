import { useEffect, useState } from "react"
import { Link } from "react-router"
export default function HostVans() {
    const [hostVans,setHostVans] = useState([])
    useEffect(() => {(async () => {
        const res = await fetch("/api/host/vans")
        const data = await res.json()
        setHostVans(data.vans)
    })()},[])
    const hostVansElements = hostVans.map(van => (
        <Link to={`${van.id}`} key={van.id}>
            <div key={van.id} className="host-van-card">
                <img src={van.imageUrl} alt={van.name} width={200} height={200}/>
                <section className="host-van-card-info">
                    <h1>{van.name}</h1>
                    <p>${van.price}</p>
                </section>
            </div>
        </Link>
    ))
    return (
        <div>
            <section>
                {hostVansElements}
            </section>
        </div>
    )
}