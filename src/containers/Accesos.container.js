//librerias
import { connect } from 'react-redux';
//componente
import Accesos from '../components/Accesos'
import { cambio_acceso } from '../accions/index.actions';

const mapStateProps=state=>({
    accesos:state.accesos
})

const mapDispatchToProps =dispatch=>({
    evCambio(folio){
        dispatch(cambio_acceso(folio))
    }
})

export default connect(mapStateProps,mapDispatchToProps)(Accesos);