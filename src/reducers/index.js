//librerias
import { combineReducers } from "redux";
//types
import { 
                CHANGE_FILTRO,
                ADD_USERS, 
                SELECT_USER, 
                EDICION, 
                SHOW_ACCESSO, 
                ADD_ACCESOS, 
                STATE_USERS,
                CHANGE_ID,
                CHANGE_NOMBRE,
                CHANGE_COMPLETO,
                CHANGE_EMAIL,
                CHANGE_ACCESO,
                STATE_ACCESOS
            } from "./types.reducers";

/***
 ***  Reducers
 ***/
const filtro_usuario     = ( state=""     , actions) => actions.type === CHANGE_FILTRO     ? actions.filtro     : state;
const usuarios              = (state=[]      , actions) => actions.type === ADD_USERS             ? actions.usuarios : state;
const carga_usuarios   = (state=false , actions) => actions.type === STATE_USERS         ? actions.estado   : state;
const usuario                = (state={}      , actions) =>{
    let {
            type,
            usuario,
            id_scoi = state.id_scoi ,
            nombre_usuario= state.nombre_usuario,
            nombrecompleto_usuario=state.nombrecompleto_usuario,
            email_usuario= state.email_usuario
        } = actions
        
    switch(type){
        case SELECT_USER:
            return usuario
        case CHANGE_ID:
            return {
                ...state,
                id_scoi
            }
        case CHANGE_NOMBRE:
            return {
                ...state,
                nombre_usuario
            }
        case CHANGE_COMPLETO:
            return {
                ...state,
                nombrecompleto_usuario
            }
        case CHANGE_EMAIL:
            return {
                ...state,
                email_usuario
            }
        default:
            return state
    }
} 
const edicion                = (state=false , actions) => actions.type === EDICION                  ? actions.estatus  : state;
const vista_accesos     = (state=false , actions) => actions.type === SHOW_ACCESSO     ? actions.estatus  : state;
const accesos               = ( state=[]     , actions) =>{
    switch( actions.type ){
        case ADD_ACCESOS:
            return actions.accesos;
        case CHANGE_ACCESO:
            return state.map(acceso=>{
                acceso.Sub_menus.map(sub=>{
                    sub.Accesos.map(acc=>{
                        if(acc.Folio_acceso=== actions.folio){
                            acc.Estatus = acc.Estatus.search ("C")>-1 ? "V":"C" 
                        }
                        return acc
                    })
                    return sub
                })
                return acceso
            })
        default:
            return state
    }
} 
const estado_accesos = (state=false,actions)=>actions.type===STATE_ACCESOS ? actions.estado:state;
const reducers = combineReducers({
    filtro_usuario,
    usuarios,
    carga_usuarios,
    usuario,
    edicion,
    vista_accesos,
    accesos,
    estado_accesos
});

export default reducers;
