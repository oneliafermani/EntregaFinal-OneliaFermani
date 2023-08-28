import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"




const NavBar = () => {
    return (
        <nav className="NavCategory">
            <div className="NavCategory">
                <Link to={'/category/tortas'} className='btnCat'> Tortas   </Link>  
                <Link to={'/category/tartas'}  className='btnCat'> Tartas  </Link>  
                <Link to={'/category/cupcackes'} className='btnCat'> Cupcackes  </Link>      
            </div> 
        </nav>
    )
}

export default NavBar