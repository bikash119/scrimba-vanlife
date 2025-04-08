import { NavLink } from "react-router"
export default function HostVanHeader() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <nav>
            <NavLink 
            to="." end relative="path"
            style={({isActive}) => isActive ? activeStyle : null} >Details
            </NavLink>
            <NavLink 
            to="price" relative="path"
            style={({isActive}) => isActive ? activeStyle : null} >Price
            </NavLink>
            <NavLink 
            to="photos" relative="path"
            style={({isActive}) => isActive ? activeStyle : null} >Photos
            </NavLink>
        </nav>   
    )
}