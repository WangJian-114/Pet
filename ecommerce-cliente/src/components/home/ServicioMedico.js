const ServicioMedico = () => {
    return (
        <div className="contenedor-medico">
            <div className="contenido-medico">

                <div className="encabezado">
                    <h3>Servicio Medico</h3>
                </div>
                <div className="contenedor-service">
                    <div className="service">
                        <picture>
                            <img src="img/service1.jpg" alt=""/>
                            <p className="opinion">lorem</p>
                        </picture>

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>


                          
                    </div>
                    
                    <div className="service">
                        <picture>
                            <img src="img/service2.jpg" alt=""/>  
                            <p className="opinion">Recomentado</p>
                        </picture>
                    

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>


                    </div>

                    <div className="service">
                        <picture>
                            <img src="img/service3.jpg" alt=""/>
                            <p className="opinion">Recomentado</p>
                        </picture>

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>


                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default  ServicioMedico;