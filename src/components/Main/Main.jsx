import FotoPresentacion from './assets/pasteleria1.jpg'
import "./Main.css"

function Main () {
    return(
        <div className="Main">
            <div className=''>
                <h5 className='MainTitle'>Bienvenidos a Dolce & Ricco </h5>
                <p className='MainText'> Nos dedicamos a fabricar desde el amor y la familiaridad</p>
            </div>
            <div className="MainImg">
                <img width="1000px" src= {FotoPresentacion} alt="Pasteleria" className='MainImg'/>
            </div>
        </div>
    )
}

export default Main;


