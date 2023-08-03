import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    useEffect(() => {
        getProductsById('1')
            .then( Response =>{
                setProduct(Response)
            } )
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;