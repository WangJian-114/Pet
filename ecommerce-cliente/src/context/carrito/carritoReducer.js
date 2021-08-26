import { 
    OBTENER_TOTAL,
    AGREGAR_CARRITO,
    ELIMINAR_CARRITO,
    VACIAR_CARRITO,
    OBTENER_CARRITO,
    MOSTRAR_CARRITO
 } from '../../type';


 // eslint-disable-next-line import/no-anonymous-default-export
 export default (state, action) => {
    switch(action.type) {

        case MOSTRAR_CARRITO:

            let stateCart;

            if(state.openCart){
                stateCart = false;
            } else{
                stateCart = true;
            }

            return {
                ...state,
                openCart: stateCart
            }



        case OBTENER_CARRITO:

            return {
                ...state,
                carrito: action.payload.carrito, 
                Total: action.payload.total
            }
    
        case AGREGAR_CARRITO:
            // tomo una copia del carrito
            let carritoOld = [...state.carrito];

            // verifica si existe el producto que selecciono el usuario
            const existe = carritoOld.some(producto => producto.productId === action.payload.productId);

            if(existe){
                const carritoNew = carritoOld.map( producto => {
                    // Si encuentra igual entonces reemplazo la cantidad
                    if(producto.productId === action.payload.productId){
                        return {
                            ...producto,
                            cant: action.payload.cant
                        };

                    } else {
                        return producto;// retorna objeto que no son duplicados
                    }    
                });
                return {
                    ...state,
                    carrito:[...carritoNew]
                }
            } else{ 
                return {
                    ...state,
                    carrito:[...state.carrito, action.payload]
                }
        }
                
        

        case OBTENER_TOTAL:
            let total = 0; 
            state.carrito.forEach( articulo => {
                total += articulo.price * articulo.cant; 
            });
            return {
                ...state,
                Total:total
            }

        case ELIMINAR_CARRITO :
            return {
                ...state,
                carrito: state.carrito.filter(producto => producto.productId !== action.payload),
            }

        case VACIAR_CARRITO :
            state.carrito = [];
            return {
                ...state,
                Total: 0
            }

        default:
            return state;
    }
}