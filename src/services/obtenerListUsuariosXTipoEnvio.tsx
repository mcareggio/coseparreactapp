import usuariosenvio from '../mocks/listadoUsuariosEnvio.json';
import { usuarios_envio } from '../types/common.tsx'

export function obtenerListUsuariosXTipoEnvio(search: string) {

    //let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO
    let url = "arreglar_la_url"
    // let newlistado: usuarios_envio[] = []
    if (search == "") {
        url += "/" + "marcos"
        console.log("Hacer un fetch de todo")
    }
    else {
        url += "/" + search
        console.log("Hacer un fetch de " + url)
    }
    //cambiar el json a vawriable url
    let newlistado = fetch('listadoUsuariosEnvio.json').then((response) => response.json()).then((array: usuarios_envio[]) => {

        let newlistado: usuarios_envio[] = []
        array.map((el: usuarios_envio) =>
            newlistado.push(
                {
                    id: el.id,
                    nombre: el.nombre,
                    telefono: el.telefono,
                    email: el.email,
                    enviowhatsapp: el.enviowhatsapp,
                    enviomail: el.enviomail
                })
        )


    }
    ).then((newlistado) => { return newlistado })


    return newlistado;

}
/*
export function obtenerListUsuariosXTipoEnvio(search_to_fetch: string) {

    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO
    let search_path = ""
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
    */