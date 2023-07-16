import CartWdget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3> TIENDA DE DULCES </h3>
            <div>
                <button> Inicio </button>
                <button> Productos </button>
                <button> Contacto </button>                              
            </div>
            <CartWdget />
        </nav>
    )
}

export default NavBar