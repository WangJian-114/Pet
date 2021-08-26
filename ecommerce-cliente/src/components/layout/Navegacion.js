import { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import carritoContext from '../../context/carrito/carritoContext';
import Notificacion from '../carrito/Notificacion';

const Navegacion = () => {


    const AuthContext = useContext(authContext);
    const { usuario, autenticado, logOut } = AuthContext;
    const CarritoContext = useContext(carritoContext);
    const { carrito,  changeStateCart } = CarritoContext;

    return (
        <>
            <div className="navegacion">
                <div className="enlaces">
                    <Link to={'/'} className="item" >Home</Link>
                    <Link to={'/productos'} className="item">Tienda-Online</Link>
                </div>
                
                <div className="iniciar-sesion">
                    { autenticado 
                        ?
                        (
                        <>
                            <Link to={'/usuario'} >{ usuario? `Hola ${usuario.name}`: null  }</Link>
                            {/* <div className="cart-section"> */}
                                <i 
                                    className="fas fa-shopping-cart carrito-compra "
                                    onClick={ changeStateCart }
                                ></i>
                                <Notificacion 
                                    cantidades = {carrito.length}
                                />
                            {/* </div> */}
                            <button 
                                className="btn-login"
                                onClick={() => logOut() }  
                            >Cerrar Sesion</button>
                            { usuario && usuario.rol === "ADMIN_ROLE" ?  
                                <Link to={'/administracion'} className="btn-admin"><i className="fas fa-user-cog"></i>Admin</Link>
                                : null }
                        </>
                        )
                        
                        : <Link to={'/login'} 
                            className="btn-iniciar" 
                            >Iniciar Sesion</Link> }

                    
                </div>

            </div>
        </>
    );
}
 
export default Navegacion;