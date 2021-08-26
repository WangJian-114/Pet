import { 
    REGISTRO_EXITOSO ,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    CERRAR_SESION 
   } from '../../type';

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state, action) => {
   switch(action.type) {

        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                autenticado: true,
                loading: false
            }
            
        case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                loading: false
            }

        case CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                autenticado: false,
                usuario:null,
                loading: false
            }
    

       default:
           return state;
   }
}