//librerias
import { combineReducers } from "redux";
//types
import { 
                CHANGE_FILTRO,
                ADD_USERS, 
                SELECT_USER, 
                EDICION, 
                SHOW_ACCESSO, 
                ADD_ACCESOS 
            } from "./types.reducers";

/***
 ***  Reducers
 ***/
const filtro_usuario     = ( state=""     , actions) => actions.type === CHANGE_FILTRO     ? actions.filtro     : state;
const usuarios              = (state=[]      , actions) => actions.type === ADD_USERS             ? actions.usuarios : state;
const usuario                = (state={}      , actions) => actions.type === SELECT_USER          ? actions.usuario  : state;
const edicion                = (state=false , actions) => actions.type === EDICION                  ? actions.estatus  : state;
const vista_accesos     = (state=false , actions) => actions.type === SHOW_ACCESSO     ? actions.estatus  : state;
const accesos               = ( state=[]     , actions) => actions.type === ADD_ACCESOS         ? actions.accesos : state;

const reducers = combineReducers({
    filtro_usuario,
    usuarios,
    usuario,
    edicion,
    vista_accesos,
    accesos,
});

export default reducers;
