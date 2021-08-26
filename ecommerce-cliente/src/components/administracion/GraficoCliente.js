import { useEffect, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import pedidoContext from '../../context/pedido/pedidoContext';


const GraficoCliente = () => {

    const PedidoContext = useContext(pedidoContext);
    const {  mejoresClientes, bestClients } = PedidoContext;

    useEffect (() => {
      bestClients(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // if(!mejoresClientes) return 'cargando...';
    // console.log(mejoresClientes);

    const clienteGrafica = [];

    // eslint-disable-next-line array-callback-return
    mejoresClientes.map((cliente, index) => {
        clienteGrafica[index] = {
            ...cliente.clientes[0],
            total: cliente.total
        }
    })

    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={600}
            height={500}
            data={clienteGrafica}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      );
}
 
export default GraficoCliente;