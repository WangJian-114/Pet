import React, { useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from 'formik';

// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import CustomInput from "./CustomInput/CustomInput.js";
import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";

// Context
import authContext from "../../context/auth/authContext";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function FormPerfil() {

  const classes = useStyles();

  const AuthContext = useContext(authContext);
  const { usuario, updateProfile, usuarioAutenticado } = AuthContext;

  useEffect (() => {
    usuarioAutenticado();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const { uid, name, email, address, last_name, tel } = usuario;

  // Formulario y Validacion con formik y yup
  const formik = useFormik({
    initialValues: {
      email,
      name,
      last_name,
      address,
      tel
    },

    onSubmit: (data)=> {
      // console.log('desde perfil ',data);
      updateProfile(uid,data);
    },
    
  });

  if(!usuario) return 'cargando...';


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
              <p className={classes.cardCategoryWhite}>Completa tu perfil</p>
            </CardHeader>
            <CardBody>
              <form
                onSubmit={formik.handleSubmit}
              >
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email"
                      name="email"
                      value={formik.values.email}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Nombre"
                      name="name"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Apellido"
                      name="last_name"
                      id="last_name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Direccion"
                      name="address"
                      id="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="contacto"
                      name="tel"
                      id="tel"
                      value={formik.values.tel}
                      onChange={formik.handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <CardFooter>
                  <Button 
                    color="primary"
                    type="submit"
                    // onClick={ actualizar }
                  >Actualizar Perfil</Button>
                </CardFooter>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
