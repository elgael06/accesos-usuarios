import React,{Fragment} from 'react'

const SubMenu =({submenu,evento})=>{
    
    return  <Fragment>
        <tr className=" bg-warning ">
            <td colSpan="2"><i style={{marginLeft:10}} className={submenu.Icon_Sub_menus}></i>{" "+submenu.Sub_menus}</td>
        </tr>
        {
            submenu.Accesos.map(acceso=> <tr className="is-primary" key={acceso.Folio_acceso}>
            <td ><i style={{marginLeft:20}} className="fa fa-arrow-right"></i>{" "+acceso.Nombre}</td>
            <td><i className={acceso.Estatus.search ("C")>-1 ? "button is-danger fa fa-toggle-off" : "button is-primary fa fa-toggle-on"} onClick={()=>evento(acceso.Folio_acceso)}></i></td>
        </tr>)
        }
</Fragment>;
}

export default SubMenu;

/**
 * 
 * Icon_Menu: "fa fa-sliders"
Menu: "ADMINISTRACION"
Sub_menus: [{,…}, {Accesos: [,…], Sub_menus: "AUTORIZACIONES", Icon_Sub_menus: "fa fa-dollar"}]
0: {,…}
Accesos: [{Folio_acceso: 1, Nombre: "NIVEL ACCESO USUARIOS", Url: "Usuarios/Accesos", Estatus: "C "},…]
0: {Folio_acceso: 1, Nombre: "NIVEL ACCESO USUARIOS", Url: "Usuarios/Accesos", Estatus: "C "}
1: {Folio_acceso: 2, Nombre: "DESCARGA SCOI", Url: "descargas/SCOI.rar", Estatus: "C "}
Estatus: "C "
Folio_acceso: 2
Nombre: "DESCARGA SCOI"
Url: "descargas/SCOI.rar"
Icon_Sub_menus: "fa fa-user"
Sub_menus: "GESTION USUARIOS"
 */