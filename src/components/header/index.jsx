import React from 'react'
//componente
import CargarUsuarios from '../../containers/CargarUsuarios.container'

const Header =()=>{
    return(
        <nav className="level bg-info p-2">
            <div className="level-left">
                <div className="level-item">
                    <i className="fa fa-users text-white is-1"></i>
                    <strong className="title is-4 p-1 text-white">Accesos Usuarios.</strong>
                </div>
            </div>
            <div className="level-right p-1">
                <div className="level-item">
                    <div className="field has-addons">
                        <p className="control">
                            <input type="text" className="input" placeholder="Id SCOI."/>
                        </p>
                        <p className="control">
                            <i className="button is-light fa fa-plus"></i>
                        </p>
                    </div>
                </div>
                <CargarUsuarios/>
            </div>
      </nav>
    );
}

export default Header;