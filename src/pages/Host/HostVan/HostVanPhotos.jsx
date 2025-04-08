import { useOutletContext } from "react-router"
export default function HostVanPhotos() {
    const {currentVan} = useOutletContext()
    return (
        <div>
            <img src={currentVan.imageUrl} alt={currentVan.name} width={200} height={200}/>
        </div>
    )
}