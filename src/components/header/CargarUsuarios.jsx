import React from 'react'
import { obtener_usuarios } from '../../conexiones/index.conections';

const CargarUsuarios =({evCargar,carcando})=>{
    //funciones
    const onCargar =async ()=>{
        evCargar()
        let res = await obtener_usuarios();
        setTimeout(()=>{
        res===null ? evCargar([],false): evCargar(res,false)},
        200)
    }
    const clase_btn = carcando ?  <i className="button is-loading" style={{width:100}}></i> : 
    <i className="button is-warning is-fullwidth fa fa-download" id="cargar-usuarios" onClick={onCargar}>  Cargar Usuarios.</i>

    return (<div className="level-item">
    <p className="control">
       {clase_btn}
    </p>
</div>)
}
export default CargarUsuarios;