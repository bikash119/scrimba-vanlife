import { Outlet,Link,useParams,NavLink } from "react-router"
import { useState,useEffect } from "react"
import HostVanHeader from "../Header/HostVanHeader"
export default function HostVanDetailLayout() {
    const {id} = useParams()
    const [currentVan,setCurrentVan] = useState(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/host/vans/${id}`)
            const data = await res.json()
            setCurrentVan(data.vans[0])
        })()
    },[id])
    if(!currentVan){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <Link to=".." relative="path" className="host-van-link-header">My vans</Link>
            <section className="host-van-detail-layout">
                <img src={currentVan.imageUrl} alt={currentVan.name} width={200} height={200}/>
                <h1>{currentVan.name}</h1>
            </section>
            <HostVanHeader />
            <Outlet context={{currentVan}}/>
        </div>
    )
}