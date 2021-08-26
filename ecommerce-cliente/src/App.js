import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Productos from './components/producto/Productos';
import SignIn from './components/auth/SignIn';
import NewAccount from './components/auth/NewAccount';
import Dashboard from './components/administracion/Dashboard';
import AdminProductos from './components/administracion/AdminProductos';
import AdminUsuarios from './components/administracion/AdminUsers';
import FormAddProduct from './components/administracion/FormAddProduct';
import FormEditProduct from './components/administracion/FormEditProduct';
import RutaPrivada from './components/rutas/RutaPrivada';
import AdminPedidos from './components/administracion/AdminPedidos';
import Perfil from './components/usuario/Perfil';
import MiCompras from './components/usuario/MiCompras';
import BestClient from './components/administracion/BestClient';
import ProductosMasVendido from './components/administracion/ProductoMasVendido';

import CarritoState from './context/carrito/carritoState';
import AuthState from './context/auth/authState';
import ProductoState from './context/producto/productoState';
import UsuarioState from './context/usuario/usuarioState';
import PedidoState from './context/pedido/pedidoState';

import tokenAuth from './config/tokenAuth';
// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}


function App() {
  return (
    <Router>
      <CarritoState>
        <AuthState>
          <ProductoState>
            <UsuarioState>
              <PedidoState>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/productos" component={Productos} />
                  <Route exact path="/login" component={SignIn} />
                  <Route exact path="/nueva-cuenta" component={NewAccount} />
                  
                  <Route exact path="/usuario" component={Perfil} />
                  <Route exact path="/usuario/compras" component={MiCompras} />

                  <RutaPrivada exact path="/administracion" component={Dashboard} />
                  <RutaPrivada exact path="/administracion/productos" component={AdminProductos} />
                  <RutaPrivada exact path="/administracion/usuarios" component={AdminUsuarios} />
                  <RutaPrivada exact path="/administracion/editar-producto" component={FormEditProduct} />
                  <RutaPrivada exact path="/administracion/agregar-producto" component={FormAddProduct} />
                  <RutaPrivada exact path="/administracion/ordenes" component={AdminPedidos} />
                  <RutaPrivada exact path="/administracion/mejores-clientes" component={BestClient} />
                  <RutaPrivada exact path="/administracion/productos-mas-vendido" component={ProductosMasVendido} />
                </Switch>
              </PedidoState>
            </UsuarioState>
          </ProductoState>
        </AuthState>
      </CarritoState>
    </Router>
  );
}

export default App;
