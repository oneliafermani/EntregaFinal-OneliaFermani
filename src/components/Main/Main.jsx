import FotoPresentacion from './assets/pasteleria1.jpg'
import "./Main.css"

function Main () {
    return(
        <div className="Main">
            <div className=''>
                <h5 className='MainTitle'>Bienvenidos a Dolce & Ricco </h5>
                <p className='MainText'> El ingrediente secreto es AMOR. ¡Sentimos AMOR por la pastelería y queremos llevarlo a tu hogar! Hacemos todos los productos de manera 100% artesanal y personalizada. Esperamos que te guste todo lo que veas y puedas probarlo pronto!</p>
            </div>
            <div className="MainImg">
                <img width="1000px" src= {FotoPresentacion} alt="Pasteleria" className='MainImg'/>
            </div>
        </div>
    )
}

export default Main;


