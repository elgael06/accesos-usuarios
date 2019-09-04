import Axios from "axios";
import { ip } from "./host.conections";

/**
 * 
 * @param {Function} conexion 
 * metodo asyncrono para consultar api.
 * @param {string} error 
 * mensaje de error opcional.
 * @description funcion que contiene los fallos de conexion y retorna la data.
 */
const contenedor_data = async (conexion,error="Conexion Fallida...")=>{
    let data = null
    try{
        let respuesta = await conexion
        if(respuesta.status ===200){
            data = respuesta.data
        }
    }catch{
        console.log(error)
    }
    return data
}
/**
 * @description 
 * Consulta api para obtener los usuarios de SCOI.
 */
export const obtener_usuarios = async ()=>{
    let res =await contenedor_data(Axios.get(`${ip}api/Usuarios_web`));
    return res;
}
/**
 * 
 * @param {number} folio
 * variable tipo entero que contiene el folio de scoi del usuario web. 
 * @description consulta los accesos de usuario por folio.
 */
export const obtener_accesos_usuario = async folio =>{
    return await contenedor_data(Axios.post(`${ip}api/Accesos_url?id=${folio}`),"Error Al Obtener Accesos...")
}
/**
 * 
 * @param {number} id 
 * identificador de usuario en scoi web.
 * @param {Array} accesos 
 * lista de accesos a actualizar.
 * @description Agrega o actualiza los accesos de usuario en el sistema web.
 */
export const Actualizar_accesos = async (id,accesos)=>{
    return await contenedor_data(Axios.post(`${ip}api/Accesos_url?id_usuario=${id}`, accesos),"Error al Actualizar Accesos...")
} 


/***
 * 01-800-900-2000
 * -1
 * -NT
 * año nac
 * 
  */