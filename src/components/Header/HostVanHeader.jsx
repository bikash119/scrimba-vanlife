import { NavLink } from "react-router"
export default function HostVanHeader() {
    return (
        <nav>
            <NavLink to="." relative="path">Details</NavLink>
            <NavLink to="price" relative="path">Price</NavLink>
            <NavLink to="photos" relative="path">Photos</NavLink>
        </nav>   
    )
}