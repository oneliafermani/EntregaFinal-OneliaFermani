import { useEffect, useState } from "react"
import { getProductsById } from "../../services/Firebase"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { Ring } from '@uiball/loaders'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById( itemId )
            .then( Response =>{
                setProduct(Response)
                setLoading(false);
            } )
            .catch(error => {
                console.error(error)
                setLoading(false);
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            {loading ? ( // Mostrar el spinner de carga si está cargando
                <Ring size={90} lineWeight={5} speed={1} color="pink" />
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    )
}

export default ItemDetailContainer;

