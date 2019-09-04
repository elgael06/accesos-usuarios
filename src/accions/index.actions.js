import { CHANGE_FILTRO, ADD_USERS, SELECT_USER, EDICION, SHOW_ACCESSO, ADD_ACCESOS, STATE_USERS } from "../reducers/types.reducers";

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