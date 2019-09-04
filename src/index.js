import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
//estilos
import './index.css';
//componentes
import App from './components/App';
//store
import store from './store';

//carga de usuarios
setTimeout(()=>{
    document.querySelector("#cargar-usuarios").click()
},100)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
