import React from 'react';
import Layout from './Layout';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GraficoCliente from './GraficoCliente';


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
    height: 640,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    
    <Layout>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={10}>
        <Paper className={fixedHeightPaper}>
          <GraficoCliente />
        </Paper>
      </Grid>
    </Layout>

  );
}