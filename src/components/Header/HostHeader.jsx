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
                to="/host/income"
                style={({isActive}) => isActive ? activeStyle : null}
            >Income</NavLink>
            <NavLink 
                to="/host/vans"
                style={({isActive}) => isActive ? activeStyle : null}
            >Vans</NavLink>
            <NavLink 
                to="/host/reviews"
                style={({isActive}) => isActive ? activeStyle : null}
            >Reviews</NavLink>
        </nav>
    )
}