import React from "react";
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
    <button className="botonClear" onClick={props.manejarClear}>
        {props.children}
    </button>
);

export default BotonClear;