import React, { useReducer } from 'react';
import CarritoContext from './carritoContext';
import CarritoReducer from './carritoReducer';
import Swal from 'sweetalert2';
import axiosClient from '../../config/axios';


import { 
    OBTENER_CARRITO,
    AGREGAR_CARRITO,
    OBTENER_TOTAL,
    ELIMINAR_CARRITO,
    VACIAR_CARRITO,
    MOSTRAR_CARRITO
 } from '../../type';


const CarritoState = props => {

    const inicialState = {
        carrito : [],
        Total : 0,
        cargando: true,
        openCart: false
    }

    const [ state, dispatch ] =  useReducer(CarritoReducer, inicialState);


    const getCart = async () => {
        try {
            const res = await axiosClient.get('/cart');
            // console.log(res.data.cartUser);
    
            dispatch({
                type: OBTENER_CARRITO,
                payload: res.data.cartUser
            }); 

        } catch (error) {
            console.log(error);
        }
    }


    const changeStateCart = () => {
        dispatch({
            type: MOSTRAR_CARRITO
        })
    }



    // Agregar Carrito
    const addCart = async ( product ) => {
        const { productId, cant } = product;
        const cantidad = {
            cant
        };
        try {
            const res = await axiosClient.post(`/cart/${productId}`, cantidad);
            // console.log(res);
            dispatch({
                type: AGREGAR_CARRITO,
                payload: product
            });

            getTotal();
    
            Swal.fire(
                'Correcto',
                res.data.msg,
                'success'
            ); 
        } catch (error) {
            console.log('hubo un error',error);
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: error.response.data.msg
            })
        }
    }

    const getTotal = () => {
        dispatch({
            type: OBTENER_TOTAL
        })

    }

    const removeProduct = async (idProduct) => {
        try {

            await axiosClient.delete(`/cart/${idProduct}`);

            dispatch({
                type: ELIMINAR_CARRITO,
                payload: idProduct
            })

            getTotal();
    
            Swal.fire(
                'Correcto',
                'El producto se elimino correctamente',
                'success'
            );

        } catch (error) {
            console.log(error.response);
            // Alerta
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: error.response.data.errors[0].msg
            })
        }
    }

    const removeAll = () => {

        Swal.fire({
            title: 'Estas seguro?',
            text: "Una vez confirmado la operacion no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch({
                type:VACIAR_CARRITO
              })
              Swal.fire(
                'Eliminado!',
                'Todos los productos fueron eliminado',
                'success'
              )
            }
          })
    }

    const inicializeCart = () => {

        dispatch({
        type:VACIAR_CARRITO
        })

    }


    return(
        <CarritoContext.Provider
            value={{
                cargando: state.cargando,
                carrito : state.carrito,
                total : state.Total,
                openCart : state.openCart,
                getCart,
                changeStateCart,
                addCart,
                removeProduct,
                removeAll,
                inicializeCart 
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )


}

export default CarritoState;