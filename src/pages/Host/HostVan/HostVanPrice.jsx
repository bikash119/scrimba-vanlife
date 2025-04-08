import { useOutletContext } from "react-router"
export default function HostVanPrice() {
    const {currentVan} = useOutletContext()
    return (
        <div>
            <h1>${currentVan.price}/day</h1>
        </div>
    )
}