import { useContext } from 'react'
import cart from './assets/Cart-Widget.svg'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWdget = () => {
    const { totalQuantity } = useContext (CartContext)
        
    return (
        <Link to='/cart' className='btn1' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img width="20px" src={cart}  alt="cart-Widget"/>
            {totalQuantity}
        </Link>

    )
}

export default CartWdget