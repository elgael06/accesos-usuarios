//libreria
import React from 'react';
//estilos
import './modalBase.scss'
const ModalBase =({titulo,children,onCerrar,id=""})=>{

    return (<div className="modal-base">
        <div className="contenedor-modal animate" id={id}>
            <div className="cavecera-modal">
                <u className="cerrar" onClick={onCerrar}>Cerrar</u>
                <h5>{titulo}</h5>
            </div>
            <div className="cuerpo-modal">{children}</div>
        </div>        
    </div>);
}

export default ModalBase;