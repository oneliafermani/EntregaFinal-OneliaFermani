import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"




const NavBar = () => {
    return (
        <nav className="Nav">
            <div className="NavCategory">
                <NavLink to={`/category/tortas`}  > tortas</NavLink>
                <NavLink to={`/category/tartas`}  > tartas</NavLink>
                <NavLink to={`/category/cupcackes`}  > cupcackes</NavLink>
            </div>        
        </nav>
    )
}

export default NavBar