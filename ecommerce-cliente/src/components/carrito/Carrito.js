import React, { useContext, useEffect } from 'react';
import CarritoItem from './CarritoItem';
import carritoContext from '../../context/carrito/carritoContext';
import authContext from '../../context/auth/authContext';
import pedidoContext from '../../context/pedido/pedidoContext';

const Carrito = () => {

    const CarritoContext = useContext(carritoContext);
    const { openCart, carrito, total, getCart, inicializeCart, changeStateCart } = CarritoContext;

    const AuthContext = useContext(authContext);
    const {  autenticado } = AuthContext;

    const PedidoContext = useContext(pedidoContext);
    const { createOrder } = PedidoContext;

    const generarPedido = () => {
        const info = {
            carrito,
            total
        };
        createOrder(info);  
        inicializeCart(); 

    }

    useEffect (() => {
        getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[total]);
    
    return ( 
        <>  
            {autenticado 
            ? (            

                <div className={`contenedor-carrito ${ openCart ? 'fade-in' : 'close-menu fade-out'}`}>
                    <div className="close-cart">
                        <i 
                            className="fas fa-times"
                            onClick={changeStateCart}
                        ></i>
                    </div>

                    { carrito.length !== 0 ?
                        (
                            <>
                                { carrito.map( producto =>(
                                        <CarritoItem 
                                            key={producto._Id}
                                            producto={producto}
                                        />
                                    )) }
                                
                                <div className="acciones-carrito">
                                    <p>Total: {total}</p>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={generarPedido}
                                    >CONFIRMAR COMPRAS</button>
                                </div>
                            </>
                        )
                        : <p>El carrito esta vacio</p>
                    }



                </div>
        
        )
            
            : null}

        </>

    );
}
 
export default Carrito;