import "./PagContacto.css"

function PagContacto () {
    return(
        <div>
            <h1 className="TitleContacto"> Encontranos en... </h1>
            <div className="Contacto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.440036195894!2d-62.1904864248852!3d-33.28114918886086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c902396d111d47%3A0x9dc036adfaa14df8!2sItalia%20773%2C%20Corral%20de%20Bustos%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1693254119233!5m2!1ses-419!2sar" width="600" height="450" className="Maps"></iframe>
                <div className="InfoContacto">
                    <p className="Info"> Italia 773, Corral de Bustos,  Córdoba. </p>
                    <p className="Info"> Telefono: 3468 - 580558 </p>
                    <p className="Info"> Celular: 3468 - 15512249 </p>
                    <p className="Info"> Pedidos con 48hs de anticipación. </p>
                </div>
            </div>
        </div>
    )

}

export default PagContacto;


