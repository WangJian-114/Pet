import React, { useContext } from 'react';
import CarritoContext from '../../context/carrito/carritoContext';

const CarritoItem = ({ producto }) => {

    const carritoContext = useContext(CarritoContext);
    const { removeProduct } = carritoContext;

    const eliminarProducto = (idProducto) => {
        removeProduct(idProducto);
    }


    return ( 
        <div className="contenedor-items">
            <div className="items">
                <div className="flex">
                    <img src={`${process.env.REACT_APP_IMAGE_URL}/${producto.img}`}  alt="imagen"/>
                    <div className="descripcion-producto">
                        <p>{producto.name}</p>
                        <p>{producto.description}</p>
                        <p>cantidad :{producto.cant}</p>
                        
                    </div>
                </div>

                <div className="eliminar flex">
                    <p><strong>$ {producto.price}</strong></p>
                    <button 
                        className="btn-eliminar"
                        onClick = { () => eliminarProducto(producto.productId) }
                    >Eliminar</button>
                </div>
            </div>
        </div>
    );
}
 
export default CarritoItem;