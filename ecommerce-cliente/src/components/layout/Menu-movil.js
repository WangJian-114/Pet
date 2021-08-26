import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import carritoContext from '../../context/carrito/carritoContext';

const MenuMovil = () => {

    const AuthContext = useContext(authContext);
    const {  autenticado, usuario, logOut } = AuthContext;

    const CarritoContext = useContext(carritoContext);
    const { openCart, changeStateCart } = CarritoContext;

    const [ openMenu, actualizarOpenMenu ] = useState(false);

    const changeStateMenu = () => {
        if(openMenu) {
            actualizarOpenMenu(false);
        } else{
            if(!openMenu && openCart){
                changeStateCart();
            }
            actualizarOpenMenu(true);

        }
    }

    const change = () => {
        actualizarOpenMenu(false);
        changeStateCart();
    }

    return (  
        <>
            <div className="menu-mobile">
                <i  
                className="fas fa-bars"
                onClick={ changeStateMenu }
                ></i>
            </div>

            <div className={`opciones-menu-mobile ${ openMenu ? 'fade-in' : 'close-menu fade-out'}`}>

                <div className="nombre">
                    <p>{usuario ? usuario.name : null}</p>
                    <i 
                        className="fas fa-times"
                        onClick={ () => actualizarOpenMenu(false)}
                    ></i>
                </div>

                <ul className="nav-mobile">
                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="/productos"><i className="fas fa-store-alt"></i>Tienda</Link></li>
                    { autenticado 
                        ? 
                          <>
                            <li><Link to="/productos"
                                    onClick= {change}
                            ><i className="fas fa-shopping-cart"></i>Carrito</Link></li>

                            <li><Link to="/"
                                onClick= { logOut }
                            ><i className="fas fa-sign-out-alt"></i>Cerrar Sesion</Link></li> 
                          </>
                        :
                        <li><Link to="/login"
                        ><i className="fas fa-sign-out-alt"></i>Iniciar Sesion</Link></li> 
                    }

                    {  usuario && usuario.rol === "ADMIN_ROLE"  && autenticado
                        ?
                        <li><Link to="/administracion" id="admin"><i className="fas fa-user-cog"></i>Admin</Link></li>
                        :
                        null
                    }

                </ul>
            </div>
            
        </>

        
    );
}
 
export default MenuMovil;