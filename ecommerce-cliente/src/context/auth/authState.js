import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import Swal from 'sweetalert2';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import { 
    REGISTRO_EXITOSO ,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    UPDATE_EXITOSO, 
   } from '../../type';


const AuthState = props => {

    const inicialState = {
        token: localStorage.getItem('token'),
        usuario: null,
        autenticado: false,
        loading: true
    };

    const [ state, dispatch ] =  useReducer(AuthReducer, inicialState);

    // En caso de implementar back tenemos que pasar el token
    const createUser = async ( data ) => {

        try{
            data.rol = "USER_ROLE";
            const result = await axiosClient.post('/user', data);
            console.log(result);
            console.log(result.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: result.data.token
            });

            usuarioAutenticado();

            Swal.fire(
                'Correcto',
                result.data.msg,
                'success'
            )

        }catch(error){
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.msg
            })
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        // if(token) {
        //     tokenAuth(token);
        // }
        tokenAuth(token);

        try {
            const respuesta = await axiosClient.get('auth/user');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });

        } catch (error) {
            console.log(error.response.data.msg);
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Usted no ha ingresado al sistema'
            });
        }
    }

    const login = async ( data ) => {

        try {
            const response = await axiosClient.post('auth/login', data);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: response.data.token
            });

            usuarioAutenticado();
    
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenido a Pet Shop',
                showConfirmButton: false,
                timer: 1000
            });
            
        } catch (error) {
            console.log(error.response.data.msg);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.msg
            })
        }

    }

    const logOut = () => {

        dispatch({
            type: CERRAR_SESION
        })

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Nos vemos! esperamos volver a verte en pronto!',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const updateProfile = async ( id, profile) => {

        try {
            const response = await axiosClient.put(`/user/${id}`, profile);

            dispatch({
                type: UPDATE_EXITOSO,
                payload: response.data.usuario
            });
    
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Se actualizo correctamente '
            });
            
        } catch (error) {
            console.log(error.response.data.msg);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.msg
            })
        }
    }



    return(
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                autenticado : state.autenticado,
                loading: state.loading,
                createUser,
                login,
                logOut,
                usuarioAutenticado,
                updateProfile
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )


}

export default AuthState;