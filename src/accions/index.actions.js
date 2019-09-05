import { 
    CHANGE_FILTRO,
     ADD_USERS,
    SELECT_USER,
    EDICION,
    SHOW_ACCESSO,
    ADD_ACCESOS, 
    STATE_USERS,
    CHANGE_ID,
    CHANGE_NOMBRE,
    CHANGE_COMPLETO,
    CHANGE_EMAIL
} from "../reducers/types.reducers";

/**
 ** actions
 */
export const cambiar_filtro = filtro =>({
    type:CHANGE_FILTRO,
    filtro
});

export const agregar_usuarios = usuarios=>({
    type:ADD_USERS,
    usuarios
});
export const cargando_usuarios = estado =>({
    type:STATE_USERS,
    estado
});

export const seleccionar_usuario = usuario=>({
    type:SELECT_USER,
    usuario
});

export const cambiar_id = id_scoi =>({
    type:CHANGE_ID,
    id_scoi
});

export const cambiar_nombre =nombre_usuario=>({
    type:CHANGE_NOMBRE,
    nombre_usuario
});

export const cambiar_nombre_completo = nombrecompleto_usuario =>({
    type:CHANGE_COMPLETO,
    nombrecompleto_usuario
});

export const cambiar_correo = email_usuario =>({
    type:CHANGE_EMAIL,
    email_usuario
});

export const cambio_edicion = estatus =>({
    type:EDICION,
    estatus
});

export const cambio_vista_acceso = estatus =>({
    type:SHOW_ACCESSO,
    estatus
});

export const agregar_accesos= accesos=>({
    type:ADD_ACCESOS,
    accesos
});