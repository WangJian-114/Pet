import React, { useReducer } from 'react';
import ProductoContext from './productoContext';
import ProductoReducer from './productoReducer';
import Swal from 'sweetalert2';
import axiosClient from '../../config/axios';

import { 
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTOS,
    PRODUCTO_ACTUAL,
    MODIFICAR_PRODUCTOS, 
    ELIMINAR_PRODUCTOS 
 } from '../../type';


const ProductoState = props => {

    const inicialState = {
        productos : [],
        productoSeleccionado: {},
        error : null
    }

    const [ state, dispatch ] =  useReducer(ProductoReducer, inicialState);


    const getProducts = async () => {
        try {
            const products = await axiosClient.get('/product');
            // console.log(products.data.productos);
            dispatch({
                type: OBTENER_PRODUCTOS,
                payload: products.data.productos
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    const productSelected = (productoSeleccionado) => {
        dispatch({
            type: PRODUCTO_ACTUAL,
            payload: productoSeleccionado
        })
    }

    const editProduct = async (data, id) => {

        console.log('editando', id);

        try {
            const res = await axiosClient.put(`/product/${id}`, data);
            console.log(res);
            console.log(res.data.newProduct);

            dispatch({
                type: MODIFICAR_PRODUCTOS,
                payload: res.data.newProduct
            });

            Swal.fire(
                'Correcto',
                'El producto se modifico correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);
        }


    }

    // Agregar Producto
    const addProduct = async ( product ) => {
        let timerInterval
        Swal.fire({
          title: 'Subiendo producto!',
          html: 'En seguida subimos el producto',
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getHtmlContainer()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        });
        try {
            const res = await axiosClient.post('/product', product, {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                }
            });
            // console.log(res);
            dispatch({
                type: AGREGAR_PRODUCTOS,
                payload: product
            });
            Swal.fire(
                'Correcto',
                res.data.msg,
                'success'
            );
        } catch (error) {
            console.log(error);
        }
    }


    const removeProduct =  (idProduct) => {

        Swal.fire({
            title: 'Estas Seguro?',
            text: "Una vez eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminalo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosClient.delete(`/product/${idProduct}`);
                    dispatch({
                        type: ELIMINAR_PRODUCTOS,
                        payload: idProduct
                    })

                    Swal.fire(
                        'Eliminado!',
                        'El producto fue eliminado.',
                        'success'
                    )
                }
            }).catch(error =>console.log);
    }


    return(
        <ProductoContext.Provider
            value={{
                productos: state.productos,
                productoSeleccionado: state.productoSeleccionado,
                getProducts,
                addProduct,
                editProduct,
                removeProduct,
                productSelected 
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )


}

export default ProductoState;