import React, {useEffect, useContext} from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Categoria from './Categoria';
import ListasProducto from './ListasProducto';
import Carrito from '../carrito/Carrito';
import Hero from '../home/Hero';

import authContext from '../../context/auth/authContext';

const Productos = () => {

    // Extraer la informacion de autenticacion
    const AuthContext = useContext(authContext);
    const { usuarioAutenticado } = AuthContext;

    useEffect (() => {
        usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return ( 
        <>
            <Header 
                titulo={"SHOP"}
            />
            <Carrito />
            <Hero />
            <Categoria />
            <ListasProducto />
            <Footer />
        </>
    );
}
 
export default Productos;

