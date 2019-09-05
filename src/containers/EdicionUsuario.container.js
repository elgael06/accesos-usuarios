//librerias
import { connect } from 'react-redux';
//componente
import EdicionUsuario from '../components/EdicionUsuario'
import { 
    cambio_edicion,
    cambio_vista_acceso, 
    cambiar_id, 
    cambiar_nombre,
    cambiar_nombre_completo,
    cambiar_correo
} from '../accions/index.actions';

const mapStateProps=state=>({
    usuario:state.usuario,
    mostrar:state.edicion
});

const mapDispatchToProps =dispatch=>({
    evCerrar(){
        dispatch(cambio_edicion(false))
        dispatch(cambio_vista_acceso(false))
    },
    cambiar(tipo,valor){
        switch(tipo){
            case "id":
                    dispatch(cambiar_id(valor))
                break;
            case "nombre":
                    dispatch(cambiar_nombre(valor))
                break
            case "completo":
                    dispatch( cambiar_nombre_completo(valor))
                break
            case "correo":
                dispatch(cambiar_correo(valor))
                break
            default:
                break
        }
    }
});

export default connect(mapStateProps,mapDispatchToProps)(EdicionUsuario);

