//libreria
import React,{Fragment}  from 'react'
//estilos
import './main.scss'
import SubMenu from './SubMenu';

const Accesos =({accesos,evCambio})=>{

return <div className="hero" id="contenedor-accesos">
    <table className="table">
        <tbody>
        {accesos.map((menu,i)=><Fragment  key={menu.Menu}>
                <tr className="bg-info text-white">
                    <td colSpan="2"><i className={menu.Icon_Menu}></i>{" "+menu.Menu}</td>
                </tr>
                {
                    menu.Sub_menus.map(sub=><SubMenu key={sub.Sub_menus} submenu={sub} evento={evCambio} />)
                }
            </Fragment>)
        }
        </tbody>
    </table>
</div>;
}

export default Accesos;

/**
 * Icon_Menu: "fa fa-sliders"
Menu: "AD
 */