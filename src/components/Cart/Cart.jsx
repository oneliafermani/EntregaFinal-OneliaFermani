import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import PagProducts from "../PagProducts/PagPRoducts"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const {  clearCart, totalQuantity } = useContext (CartContext)

        if ( totalQuantity === 0 ) {
            return (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to='/Productos' element={<PagProducts/>} className='btnCat'>Productos  </Link>
                </div>
            )
        }

        return (
            <div>
                <CartItem/>
                <button onClick={() => clearCart()} className="btnCat"> Limpiar carrito </button>
                <Link to='/checkout' className="btnCat"> Comprar </Link>
            </div>
        )
    }

    export default Cart;