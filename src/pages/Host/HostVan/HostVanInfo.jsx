import { useOutletContext } from "react-router"

export default function HostVanInfo() {
    const {currentVan} = useOutletContext()
    return (
        <div>
            <p>{currentVan.description}</p>
        </div>
    )
}