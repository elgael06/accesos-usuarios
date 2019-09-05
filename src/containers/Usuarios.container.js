//librerias
import { connect } from 'react-redux';
//componente
import Usuarios from '../components/Usuarios';
import { seleccionar_usuario, cambio_edicion, cambio_vista_acceso } from '../accions/index.actions';

const mapStateProps=state=>({
    usuarios:state.usuarios,
    carcando:state.carga_usuarios
});

const mapDispatchToProps =dispatch=>({
    evSeleccion(usuario){
        dispatch(seleccionar_usuario(usuario))
    },
    evTipo(tipo){
        let  edicion= tipo ==="Edicion", accceso = tipo==="Accesos";
        dispatch(cambio_edicion(edicion))
        dispatch(cambio_vista_acceso(accceso))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Usuarios);