import React from 'react';
import Layout from './Layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import AbmProducts from './AbmProducts';


const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function AdminProductos() {
  const classes = useStyles();  
  return (
      <Layout titulo="Productos">
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AbmProducts />
          </Paper>
        </Grid>
      </Layout>
  );
}