import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import productoContext from '../../context/producto/productoContext';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function AbmProducts( props ) {

  const ProductoContext = useContext(productoContext);
  const { productos, getProducts, removeProduct, productSelected  } = ProductoContext;

  let history = useHistory();

  const classes = useStyles();

  const eliminarProducto = (idProducto) => {
    removeProduct(idProducto);
  }

  const editarProducto = async (producto) => {
    await productSelected(producto);
    history.push('/administracion/editar-producto');
  }

  useEffect (() => {
      getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Title>Todos Los Productos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Imagen</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto) => (
            <TableRow key={producto._id}>
              <TableCell>{producto.name}</TableCell>
              <TableCell>{producto.price}</TableCell>
              <TableCell><img src={`${process.env.REACT_APP_IMAGE_URL}/${producto.img}`} alt="" className="imagen-products"/></TableCell>
              <TableCell>{producto.stock}</TableCell>
              <TableCell align="right">
                <button 
                  className="btn-editar"
                  onClick={ () => editarProducto(producto)}
                  ><i className="far fa-edit"></i></button>                                       
                <button 
                  className="btn-borrar"
                  onClick={() => eliminarProducto(producto._id)}
                ><i className="far fa-trash-alt"></i></button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" to="/administracion/agregar-producto">
          Agregar Producto
        </Link>
      </div>
    </React.Fragment>
  );
}