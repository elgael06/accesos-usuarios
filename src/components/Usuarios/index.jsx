import React from 'react'
//componente
import Cargando from '../Cargando'
//estylos
import './main.scss'
import { obtener_accesos_usuario } from '../../conexiones/index.conections'

const Usuarios =({usuarios,carcando,evSeleccion,evTipo,agregarAccesos})=>{
    console.log(usuarios)
    //funciones
    const onSeleccion =async (tipo,usuario) =>{
        console.log("Seoeccion=>",usuario,tipo)
        let accesos = await obtener_accesos_usuario(usuario.id_usuario) 
        agregarAccesos(accesos)
        evSeleccion(usuario)
        evTipo(tipo)
    }
    return (carcando?<Cargando/> : <div className="tile is-ancestor" id="contenedor-usuarios">
        {
            usuarios.map((usuario,index)=><div className="tile is-parent" key={usuario.id_scoi+"_"+index}>
                <article className="tile is-child box notification is-light card-usuario">
                    <figure className="image">
                        <img src={usuario.foto} alt="foto Usuario" />
                    </figure>
                    <div className="control">
                        <label className="label">Nombre </label>
                        <p className="input">{usuario.nombrecompleto_usuario}</p>
                    </div>
                    <div className="contenedor-folios">
                        <div className="control w-50 is-left">
                            <label className="label">SCOI</label>
                            <i className="input">{usuario.id_scoi}</i>
                        </div>
                        <div className="control w-50 is-left">
                            <label className="label">Folio</label>
                            <i className="input">{usuario.id_usuario}</i>
                        </div>
                    </div>
                    <div className="buttons">
                        <i className="button is-info fa fa-edit" onClick={()=>onSeleccion("Edicion",usuario)}> Editar Datos.</i>
                        <i className="button is-primary fa fa-lock" onClick={()=>onSeleccion("Accesos",usuario)}> Editar Accesos.</i>
                    </div>
                </article>
            </div>)
        }
    </div>);
}
/**
 * email_usuario: " "
foto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD"
id_scoi: 146
id_usuario: 2096
nombre_usuario: "ABIGAIL"
nombrecompleto_usuario: "OFELIA ABIGAIL RAZO AGUIRRE"
 */
//<img src={usuario.foto} alt="foto Usuario" width="70" height="70" />
export default Usuarios;