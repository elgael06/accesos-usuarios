//librerias
import { connect } from 'react-redux';
//componente
import BarraFiltro from '../components/BarraFiltro'
import { cambiar_filtro } from '../accions/index.actions';


const mapStateProps=state=>({
    valor:state.filtro_usuario
})

const mapDispatchToProps =dispatch=>({
    onchange(filtro){
        dispatch(cambiar_filtro(filtro))
    }
})

export default connect(mapStateProps,mapDispatchToProps)(BarraFiltro);