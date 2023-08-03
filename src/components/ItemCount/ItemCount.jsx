import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const incremet = () => {
        if (quantity < stock ) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () =>{
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}> - </button>
                <h4 className="Number"> {quantity} </h4>
                <button className="Button" onClick={incremet}> + </button>
            </div>
            <div className="Text">
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount;