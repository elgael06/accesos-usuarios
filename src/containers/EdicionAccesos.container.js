//librerias
import { connect } from 'react-redux';
//componente
import EdicionAccesos from '../components/EdicionAccesos'
import { cambio_vista_acceso } from '../accions/index.actions';

const mapStateProps=state=>({
    usuario:state.usuario,
    mostrar:state.vista_accesos,
    accesos:state.accesos
});

const mapDispatchToProps =dispatch=>({
    evCerrar(){
        dispatch(cambio_vista_acceso(false))
        dispatch(cambio_vista_acceso(false))
    },
});

export default connect(mapStateProps,mapDispatchToProps)(EdicionAccesos);