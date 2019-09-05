//libreria 
import React from 'react'

const BarraFiltro =({valor,onchange})=>{
    return( <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input type="text" className="input" placeholder="Filtro Usuarios..." value={valor} onChange={e=>onchange(e.target.value)} />
            <span className="icon is-small is-left">
                <i className="fa fa-search"></i>
            </span>
        </p>
    </div> );
}

export default BarraFiltro;