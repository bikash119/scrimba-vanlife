import { NavLink } from "react-router"
export default function HostHeader() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <nav>
            <NavLink 
                to="."
                end
                style={({isActive}) => isActive ? activeStyle : null}
            >Dashboard</NavLink>
            <NavLink 
                to="income"
                style={({isActive}) => isActive ? activeStyle : null}
            >Income</NavLink>
            <NavLink 
                to="vans"
                style={({isActive}) => isActive ? activeStyle : null}
            >Vans</NavLink>
            <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? activeStyle : null}
            >Reviews</NavLink>
        </nav>
    )
}