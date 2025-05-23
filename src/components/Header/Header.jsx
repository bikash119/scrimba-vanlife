import { Link, NavLink } from "react-router"

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header>
            <nav>
            <div>
                <Link to="/">#VANLIFE</Link>
            </div>
            <div>
                <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyle : null}
                >Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyle : null}
                >About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyle : null}
                >Vans
                </NavLink>
            </div>
            </nav>
      </header>
    )
}