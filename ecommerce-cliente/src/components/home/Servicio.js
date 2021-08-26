const Servicio = () => {
    return ( 
        <div className="contenedor contenedor-servicio fade-in">

            <div className="flex">
                <img src="img/servicio-al-cliente.png" alt=""/>
                <p className="titulo">Que Ofrecemos</p>
            </div>

            <div className="contenedor contenedor-card">

                <div className="card">
                    <img src="img/icon1.png" alt=""/>
                    <h5>Examen físico gratuito</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

                <div className="card">
                    <img src="img/icon2.png" alt=""/>
                    <h5>Vacuna Gratis</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

                <div className="card">
                    <img src="img/icon3.png" alt=""/>
                    <h5>Plan Personalizada </h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

                <div className="card">
                    <img src="img/icon4.png" alt=""/>
                    <h5>Atencion Online</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

            </div>

        </div>
    );
}
 
export default Servicio;