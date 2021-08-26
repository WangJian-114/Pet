const Opiniones = () => {
    return (
        <div className="contenedor-testimonial">
            <div className="contenido-testimonial">

                <div className="encabezado">
                    <h3>Testimoniales</h3>
                </div>

                <div className="contenedor-tarjeta">


                    <div className="tarjeta">
                        <picture>
                            <img src="img/p1.png" alt=""/>
                            <p className="opinion">Recomentado</p>
                        </picture>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>

                        <p className="nombre">Nombre</p>
                        
                        
                    </div>
                    
                    <div className="tarjeta">
                        <picture>
                            <img src="img/p2.png" alt=""/>  
                            <p className="opinion">Recomentado</p>
                        </picture>
                       
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>

                        <p className="nombre">Nombre</p>
                    </div>

                    <div className="tarjeta">
                        <picture>
                            <img src="img/p3.png" alt=""/>
                            <p className="opinion">Recomentado</p>
                        </picture>
 
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>

                        <p className="nombre">Nombre</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Opiniones;