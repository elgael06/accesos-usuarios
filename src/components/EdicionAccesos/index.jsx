import React,{useState} from 'react'

//componete
import ModalBase from '../ModalBase'
import Accesos from '../../containers/Accesos.container'
import Cargando from '../Cargando'
import { Actualizar_accesos } from '../../conexiones/index.conections'

const EdicionAccesos =({mostrar,usuario,accesos,evCerrar})=>{
    const [conexion, setconexion] = useState(false)
    //funciones 
    const onGuardar = async()=>{
        console.log("Guardar...")
        setconexion(true)
        let lista = parcear_accesos()
        let respuesta = await Actualizar_accesos(usuario.id_usuario  , lista)
        console.log("Enviados =>",respuesta)
        setconexion(false)
        evCerrar()
        
    }
    const parcear_accesos =()=>{
        let lista = [] 
        accesos.map(acceso=>{
            acceso.Sub_menus.map(sub=>{
                sub.Accesos.map(acc=>{
                    lista.push( {
                        Folio_acceso:acc.Folio_acceso,
                        Nombre:acc.Nombre,
                        Estatus:acc.Estatus,
                        Url:acc.Url
                    })
                    return acc
                })
                return sub
            })
            return acceso
        }) 
        console.log("Lista=>",lista)
        return lista
    }
    return !mostrar || (<ModalBase onCerrar={evCerrar}>
        <div className="field is-horizontal" id="edicion-modal">
            <figure className="image w-50  float-left">
                <img src={usuario.foto} alt="foto Usuario" />
            </figure>
            <figure className="w-50  float-left p-1">
                <div className="field">
                    <label className="label">ID SCOI</label> 
                    <div className="control has-icons-left">
                        <input type="text" className="input" disabled value={usuario.id_scoi}/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-angellist"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nombre</label> 
                    <div className="control has-icons-left">
                        <input type="text" className="input" disabled value={usuario.nombre_usuario}/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-address-book"></i>
                        </span>
                    </div>
                </div>
            </figure>            
        </div>
        <hr/>
        <label className="label">Lista De Accesos</label>
        {!conexion ? <Accesos /> : <Cargando/>}
        <div className="columns m-1">
            <span className="column p-1">
                <i className="button is-primary is-fullwidth float-left fa fa-save" onClick={onGuardar}> Guardar.</i>
            </span>
            <span className="column p-1">
                <i className="button is-danger is-fullwidth float-lg-right fa fa-close" onClick={evCerrar}> Cancelar.</i>
            </span>
        </div>
    </ModalBase>);
}

export default EdicionAccesos;