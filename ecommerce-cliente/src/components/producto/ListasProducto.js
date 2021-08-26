import React, { useEffect, useContext } from 'react';
import Producto from "./Producto";
import productoContext from '../../context/producto/productoContext';

const ListaProducto = () => {

    const ProductoContext = useContext(productoContext);
    const { productos, getProducts } = ProductoContext;

    useEffect (() => {
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (  
        <div className="contenedor">
            <h1  className="encabezado">Productos</h1>
            <div className="contenedor-grid">
                {  productos.map( producto => (
                    <Producto 
                        key={producto._id}
                        producto = {producto}
                    />
                ))}       
            </div>
        </div>  
    )
}  
 
export default ListaProducto;