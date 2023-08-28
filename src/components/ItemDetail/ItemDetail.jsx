import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"


const ItemDetail = ({id, name, img, category, description, price, stock, }) => {
    const [ quantityAdded, setQuantityAdded ] = useState (0)

    const { addItem } = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id, name, price
        }

        addItem (item, quantity)
    }

    return (
        <article className="CardItemDetail">
            <header className="HeaderDetail">
                <h2 className="ItemHeaderDetail"> {name} </h2>
            </header>

            <picture >
                <img width="300px" src={img} alt= {name} className="ItemImgDetail"/>
            </picture>

            <section>
                <p className="InfoDetail"> Categoria: {category}  </p>
                <p className="InfoDetail"> Descipción: {description}  </p>
                <p className="InfoDetailPrice"> ${price}  </p>
            </section>

            <footer className="ItemFooterDetail">
                {
                    stock > 0 ? (
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="OptionDetail"> Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    ) : (
                        <p> no hay stock disponible </p>
                    )
                }
                <Link to='/productos'>
                    <button className="btnCat"> volver </button>
                </Link>
            </footer>
        </article>
    )
}

export default ItemDetail;