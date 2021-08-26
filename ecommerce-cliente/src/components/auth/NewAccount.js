import React, { useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Alerta from '../../components/util/Alerta';
import authContext from '../../context/auth/authContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {

  const classes = useStyles();

  const AuthContext = useContext(authContext);
  const { createUser, autenticado } = AuthContext;

   // Formulario y Validacion con formik y yup
  const formik = useFormik({
    initialValues: {
      name:'Jian',
      email:'jian@jian.com',
      password:'1234567',
      address:'una direccion'
    },

    validationSchema: Yup.object({
        name    : Yup.string().required('El nombre es obligatorio'),
        email   : Yup.string().email('El email no es valido').required('El email es obligatorio'),
        password: Yup.string().required('El password no puede ir vacio').min(6,'El password debe contener al menos 6 caracteres'),
        address : Yup.string().required('La direccion es obligatoria'),
    }),

    onSubmit: (info)=> {
      createUser(info)
    }
  });

  useEffect (() => {
    if(autenticado) {
      props.history.push('/');
    }

  },[autenticado, props.history])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Cuenta
        </Typography>
        <form className={classes.form} noValidate
           onSubmit={formik.handleSubmit}
        >
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoComplete="nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          { formik.touched.name && formik.errors.name ? <Alerta mensaje={formik.errors.name}/>: null }

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          { formik.touched.email && formik.errors.email ? <Alerta mensaje={formik.errors.email}/>: null }

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          { formik.touched.password && formik.errors.password ? <Alerta mensaje={formik.errors.password}/>: null }

          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Tu direccion"
            type="text"
            id="password"
            autoComplete="current-password"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          { formik.touched.address && formik.errors.address ? <Alerta mensaje={formik.errors.address}/>: null }

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Crear
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">
                  Empezar sin cuenta
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login">
                volver a iniciar sesion
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}