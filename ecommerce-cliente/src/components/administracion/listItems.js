import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';




export const mainListItems = (

  <div>
    <ListItem button  className="mb-2 mt-2">
      <Link to="/administracion" className="adminMenuItem flex">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              Dashboard
      </Link>
    </ListItem>
    <ListItem button  className="mb-2 mt-2">
      <Link to="/administracion/ordenes" className="adminMenuItem flex">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        Ordenes
      </Link>
    </ListItem>
    <ListItem button  className="mb-2 mt-2">
      <Link to="/administracion/usuarios" className="adminMenuItem flex">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        Clientes
      </Link>
    </ListItem>
    <ListItem button  className="mb-2 mt-2">
      <Link to="/administracion/productos" className="adminMenuItem flex">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        Productos
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Informes</ListSubheader>

    <ListItem button  className="mb-2 mt-2">
      <Link to="/administracion/mejores-clientes" className="adminMenuItem flex">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        Mejores Clientes
      </Link>
    </ListItem>

    {/* <ListItem button  className="mb-2 mt-2">
      <Link to="/administracion/productos-mas-vendido" className="adminMenuItem flex">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        Mejores Productos
      </Link>
    </ListItem> */}

  </div>
);