//libreria
import React from 'react';
//estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import './App.scss';
//compoentes
import Header from '../header';
import Usuarios from '../../containers/Usuarios.container'
import EdicionUsuario from '../../containers/EdicionUsuario.container'
import EdicionAccesos from '../../containers/EdicionAccesos.container'
import BarraFiltro from '../../containers/BarraFiltro.container'

function App() {
  return (
    <div className="App container">
      <Header />
      <BarraFiltro/>
      <Usuarios />
      <EdicionUsuario/>
      <EdicionAccesos />
    </div>
  );
}

export default App;
