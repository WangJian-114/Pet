import Layout from './Layout';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GraficoProducto from './GraficoProducto';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

const ProductoMasVendido = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Layout titulo="Productos Mas Vendido">
            <Grid item xs={12} md={8} lg={10}>
                <Paper className={fixedHeightPaper}>
                    <GraficoProducto />
                </Paper>
            </Grid>
        </Layout>
    );
}
 
export default ProductoMasVendido;