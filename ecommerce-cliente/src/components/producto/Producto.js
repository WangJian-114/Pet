import React from 'react';
import Modal from './Modal';

const Producto = ( {producto}) => {

    return (         
        <div className="card">
                <img src={`${process.env.REACT_APP_IMAGE_URL}/${producto.img}`} className="imagen-producto" alt="imagen"/>
                
                <div className="info-card">
                    <h4>{producto.name}</h4>
                
                    <p className="precio">${producto.price} </p> 

                    <Modal 
                        producto = {producto}
                    />
                </div>
        </div> 
        
     );
}
 
export default Producto;