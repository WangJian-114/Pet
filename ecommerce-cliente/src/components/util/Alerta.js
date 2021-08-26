import React from 'react';

const Alerta = ({ mensaje }) => {
    return ( 
        <div className="alerta alerta-error"> {mensaje} </div>
    );
}
 
export default Alerta;