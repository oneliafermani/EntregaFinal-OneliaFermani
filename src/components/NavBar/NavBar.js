import { Link, NavLink } from "react-router-dom"
import CartWdget from '../CartWidget/CartWidget';

import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="Nav">
            <div className="NavCategory">
                <NavLink to={'/category/tortas'} className={({isActive}) => isActive ? 'ActiveOption' : 'btn'}> Tortas </NavLink>         
                <NavLink to={'/category/tartas'} className={({isActive}) => isActive ? 'ActiveOption' : 'btn'}> Tartas </NavLink>  
                <NavLink to={'/category/cupcackes'} className={({isActive}) => isActive ? 'ActiveOption' : 'btn'}> Cupcackes</NavLink>  
            </div>
            <div className="NavCarrito">
                <CartWdget/>
            </div>
            
        </nav>
    )
}

export default NavBar