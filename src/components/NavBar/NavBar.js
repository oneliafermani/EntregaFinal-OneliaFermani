import CartWdget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="Nav">
            <h3> TIENDA DE DULCES </h3>
            <div className="NavBtn">
                <button className="btn"> Inicio </button>
                <button className="btn" > Productos </button>
                <button className="btn" > Contacto </button>                              
            </div>
            <div className="NavCarrito">
            <CartWdget />
            </div>
            
        </nav>
    )
}

export default NavBar