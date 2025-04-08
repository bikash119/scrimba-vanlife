import { useState,useEffect } from "react"
import { useParams,Link,useLocation } from "react-router"

export default function VanDetail() {
    const params = useParams()
    const id = params.id
    const location = useLocation()
    const [van,setVan] = useState(null)
    useEffect(() => {(async () => {
        const res = await fetch(`/api/vans/${id}`)
        const data = await res.json()
        setVan(data.vans)
    })()},[])
    if (!van) return <h1>Loading...</h1>
    const filter = location.state?.filter
    return (
        <>
            <Link to={`..?${filter ? filter : ""}`} relative="path">Back to all vans</Link>
            <div>
                <img src={van.imageUrl} alt={van.name} width={400} height={400}/>
                <h1>Van Detail</h1>
                <p>{van.name}</p>
                <p>${van.price}</p>
                <p>{van.description}</p>
                <p>{van.type}</p>
            </div>
        </>
    )
}