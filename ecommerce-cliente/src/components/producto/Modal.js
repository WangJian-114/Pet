import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CarritoContext from '../../context/carrito/carritoContext';
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ producto }) {

    const { _id, name, description, price, img } = producto;

    let history = useHistory();
  
    const carritoContext = useContext(CarritoContext);
    const { addCart } = carritoContext;

    const authContext = useContext(AuthContext);
    const { autenticado } = authContext; 


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {

        if( !autenticado ) {
            return history.push('/login');
        }

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const [productoListo, guardarProducto] = useState({
        productId:_id,
        name,
        description,
        price,
        img,
        cant: 0
    });

    const [total, guardarTotal] = useState(0);

    // actualizar la cantidad de productos
    const restarProductos = () => {
        // copiar el arreglo original de productos
        const productoFinal = productoListo;

        // validar si esta en 0 no puede ir mas alla
        if(productoFinal.cant === 0) return;

        // decremento
        productoFinal.cant--;

        // almacenarlo en el state
        guardarProducto({
            ...productoListo,
            cant: productoFinal.cant
        });

        actualizarTotal();

    }

    const aumentarProductos = () => {
        // copiar el arreglo para no mutar el original
        let productoFinal = productoListo;
       
        // incremento
        productoFinal.cant++;
 
        // almacenarlo en el state
        guardarProducto({
            ...productoListo,
            cant: productoFinal.cant
        });

        actualizarTotal();
    }

    // Actualizar el total a pagar
    const actualizarTotal = () => {

        let nuevoTotal = (productoListo.cant * productoListo.price); 
        // almacenar el Total
        guardarTotal(nuevoTotal);
    }

    const agregarCarrito = (producto) => {
        handleClose();
        if(producto.cant === 0) return 
        addCart(productoListo);
    }


    return (
        <div>
            <button 
                className="boton agregar-carrito" 
                onClick={handleOpen}
                >Agregar Al Carrito
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{producto.name}</h2>
                        <div className="flex-modal">
                            
                            <div>
                                <img src={`${process.env.REACT_APP_IMAGE_URL}/${producto.img}`} className="imagen-modal" alt="imagen"/>
                            </div>

                            <div>
                                <p id="transition-modal-description" className="ancho-fijo">{producto.description}</p>
                                <p className="stock">STOCK: {producto.stock}</p>
                                <div className="contenedor-cantidad">
                                    <p>CANTIDAD</p>
                                    <i 
                                        className="fas fa-minus"
                                        onClick={() => restarProductos() }
                                    ></i>
                                    <p>{productoListo.cant}</p>
                                    <i 
                                        className="fas fa-plus"
                                        onClick={() => aumentarProductos() }
                                    ></i>
                                </div>
                                <p className="precio-modal">${producto.price} /unididad</p>
                                <p className="total-modal">Total:    {total}</p>
                            </div>    

                        </div>

                        <button 
                            className="btn-modal"
                            onClick={() => agregarCarrito(productoListo) }
                            >CONFIRMAR</button>
                    </div>
                    
                </Fade>
            </Modal>
        </div>
    );
}
