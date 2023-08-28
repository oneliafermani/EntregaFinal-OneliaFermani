import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../NavBar/NavBar";
import "./PagPRoducts.css"


function PagProducts () {
    return(
        <div className="PagProducts">
            <div>
                <NavBar/>   
            </div>
            <div className="MainProducts">
                <p className="TitleProducts">CONOZCA TODOS NUESTROS PRODUCTOS</p>
                <ItemListContainer/>
            </div>
        </div>
    )

}

export default PagProducts;


