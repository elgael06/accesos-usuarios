import React from 'react'
//componente
import ModalBase from '../ModalBase';
//estilos
import './main.scss'

const EdicionUsuario =({mostrar,usuario,evCerrar,cambiar})=>{
    return  !mostrar ||(<ModalBase titulo={`Edicion Usuario Folio : ${usuario.id_usuario}`} onCerrar={evCerrar} id={"modal-edicion"} >
        <div className="field is-horizontal" id="edicion-modal">
            <figure className="image w-50  float-left">
                <img src={usuario.foto} alt="foto Usuario" />
            </figure>
            <figure className="w-50  float-left p-1">
            <div className="field">
                <label className="label">ID SCOI</label> 
                <div className="control has-icons-left">
                    <input type="text" className="input" onChange={e=>cambiar("id",e.target.value)} value={usuario.id_scoi}/>
                    <span className="icon is-small is-left">
                        <i className="fa fa-angellist"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Nombre</label> 
                <div className="control has-icons-left">
                    <input type="text" className="input"  onChange={e=>cambiar("nombre",e.target.value)} value={usuario.nombre_usuario}/>
                    <span className="icon is-small is-left">
                        <i className="fa fa-address-book"></i>
                    </span>
                </div>
            </div>
            </figure>
        </div>
        <div className="field">
                <label className="label">Nombre Completo</label> 
            <div className="control has-icons-left">
                <input type="text" className="input" onChange={e=>cambiar("completo",e.target.value)} value={usuario.nombrecompleto_usuario}/>
                <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                </span>
            </div>
         </div>
        <div className="field">
            <label className="label">Correo</label> 
            <div className="control has-icons-left">
                <input type="email" className="input" onChange={e=>cambiar("correo",e.target.value)} placeholder="correo..." value={usuario.email_usuario}/>
                <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                </span>
            </div>
            <div className="columns m-1">
                <span className="column p-1">
                    <i className="button is-primary is-fullwidth float-left fa fa-save"> Guardar.</i>
                </span>
                <span className="column p-1">
                    <i className="button is-danger is-fullwidth float-lg-right fa fa-close" onClick={evCerrar}> Cancelar.</i>
                </span>
            </div>
         </div>
    </ModalBase>);
}

export default EdicionUsuario;