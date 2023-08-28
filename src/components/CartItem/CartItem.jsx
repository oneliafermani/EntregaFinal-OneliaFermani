import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./CartItem.css"

function CartItem () {
    const { cart, removeItem } = useContext (CartContext);
        return (
            <div>
                {
                    cart.map ((item) => (
                        <div  key={item.id} className="CardItemFinish"> 
                            <h1 className="ItemHeaderDetail"> { item.name }</h1>
                            <p className="InfoDetail"> precio unitario: ${ item.price } </p>
                            <p className="InfoDetail"> Cantidad a comprar: { item.quantity } </p>
                            <p className="InfoDetail"> Precio total:$ {item.quantity * item.price}</p>
                            <button onClick={ () => removeItem(item.id) } className="btnCat">Eliminar</button>
                        </div>
                    ))}
                    
            </div>
        )
}

export default CartItem;