import { useEffect, useState } from "react"
import { getProducts,getProductsByCategory  } from "../../services/Firebase"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Ring } from '@uiball/loaders'

const ItemListContainer = ({ greeting }) =>  {
    const [products, setProducts] = useState ([])
    const [isLoading , setIsLoading] = useState (true)
    const {categoryId} = useParams ()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc (categoryId) 
            .then(Response => {
                setProducts(Response)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    if (isLoading) {
        return <Ring size={90} lineWeight={5} speed={1} color="pink" />; 
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer