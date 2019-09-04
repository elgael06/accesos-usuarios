//librerias
import { connect } from 'react-redux';
import CargarUsuarios from '../components/header/CargarUsuarios';
import { agregar_usuarios, cargando_usuarios } from '../accions/index.actions';
//componente

const mapStateProps=state=>({
    carcando:state.carga_usuarios
});

const mapDispatchToProps =dispatch=>({
    evCargar(usuarios=[],estado=true){
        dispatch(cargando_usuarios(estado))
        dispatch(agregar_usuarios(usuarios))
    },
});

export default connect(mapStateProps,mapDispatchToProps)(CargarUsuarios);