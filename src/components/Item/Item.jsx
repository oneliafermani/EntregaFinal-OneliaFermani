import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ id, name, img, price, stock }) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name} </h2>
            </header>

            <picture>
                <img width="200px" src={img} alt={name} className="ItemImg" />
            </picture>

            <section>
                <p className="Info"> Precio: ${price} </p>
                <p className="Info"> Stock disponible: {stock}</p>
            </section>

            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="OptionDetail"> Ver detalle </Link>
            </footer>
        </article>
    )
}

export default Item;