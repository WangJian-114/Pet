import React, {useEffect, useContext} from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServicioMedico from './ServicioMedico';
import Servicio from './Servicio';
import Nosotros from './Nosotros';
import Testimoniales from './Testimoniales';
import Carrito from '../carrito/Carrito';
import Carousel from '../../components/producto/Carousel';

import authContext from '../../context/auth/authContext';

const Home = () => {

    const AuthContext = useContext(authContext);
    const { usuarioAutenticado } = AuthContext;

    useEffect (() => {
        usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return ( 
        <>
            <Header 
                titulo={"MEDICAL"}
            />
            <Carrito />
            <Carousel />
            <Servicio />
            <ServicioMedico />
            <Nosotros /> 
            <Testimoniales />
            <Footer />
        </>
    );
}
 
export default Home;