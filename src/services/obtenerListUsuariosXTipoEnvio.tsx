import usuariosenvio from '../mocks/listadoUsuariosEnvio.json';
import { usuarios_envio } from '../types/common.tsx'
/*
export function obtenerListDatos(url: string) {

    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO


    let newresult = [{}]
    fetch(url).then((response) => response.json()).then((telefonos) => newresult = telefonos)

    return newresult;

}
*/
export function obtenerListUsuariosXTipoEnvio(search_to_fetch: string) {

    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO
    let search_path = "/search/"
    if (search_to_fetch == "")
        console.log("Hacer un fetch de todo")
    else {
        search_path += search_to_fetch
        console.log("Hacer un fetch de " + url + search_path)
    }
    let newlistado: usuarios_envio[] = []
    usuariosenvio.map((el) => { newlistado.push({ id: el.id, nombre: el.nombre, telefono: Number.parseInt(el.telefono), email: el.email, enviowhatsapp: el.enviowhatsapp, enviomail: el.enviomail }) })

    return newlistado;

}