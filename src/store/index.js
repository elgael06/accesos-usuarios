/** Librerias*/
import {createStore} from 'redux';
//reducers
import reducers from '../reducers';

const initialState ={
    usuarios:[],
    carga_usuarios:false,
    usuario:{},
    edicion:false,
    vista_accesos:false,
    accesos:[],
    filtro_usuario:"",
}

const store = createStore(reducers,initialState);

export default store;

