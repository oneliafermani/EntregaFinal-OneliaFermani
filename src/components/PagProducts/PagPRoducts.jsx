import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../NavBar/NavBar";


function PagProducts () {
    return(
        <div>
            <div>
                <NavBar/>   
            </div>
            <div>
                <p>CONOZCA TODOS NUESTROS PRODUCTOS</p>
                <ItemListContainer/>
                
            </div>
        
        </div>
    )

}

export default PagProducts;


