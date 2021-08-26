import React, { useEffect, useContext} from 'react';
import Pedidos from './Pedidos';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
import authContext from '../../context/auth/authContext';
import pedidoContext from '../../context/pedido/pedidoContext';
import Spinner from '../util/Spinner';


export default function AdminPedidos() {
  
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  const PedidoContext = useContext(pedidoContext);
  const { pedidos, getOrders, loading } = PedidoContext;
  // console.log(pedidos);

  useEffect (() => {
      usuarioAutenticado();
      getOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(loading) return <Spinner />;



  return (
    <Layout titulo="Pedidos">
        <Grid item xs={12}>
          { pedidos? pedidos.map( pedido => (
            <Pedidos 
              key={pedido._id}
              {...pedido}
            />
          ) ) : 'No hay pedidos'}
        </Grid>
    </Layout>
  );
}