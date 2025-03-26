import usuariosenvio from '../mocks/listadoUsuariosEnvio.json';
import { usuarios_forma_envio } from '../types/common.tsx'
/*
export function obtenerListDatos(url: string) {



    let newresult = [{}]
    fetch(url).then((response) => response.json()).then((telefonos) => newresult = telefonos)

    return newresult;

}
*/
export function obtenerListDatos(url: string) {



    let newlistado: usuarios_forma_envio[] = []
    usuariosenvio.map((el) => { newlistado.push({ id: el.id, nombre: el.nombre, telefono: el.telefono, email: el.email, enviowhatsapp: el.enviowhatsapp, enviomail: el.enviomail }) })

    return newlistado;

}