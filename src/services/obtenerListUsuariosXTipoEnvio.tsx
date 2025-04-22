import { Dispatch, SetStateAction } from 'react'
import { usuarios_envio } from '../types/common.tsx'
type props = {
    search_to_fetch: string,
    setListado: Dispatch<SetStateAction<usuarios_envio[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>
}
export function obtenerListUsuariosXTipoEnvio({ search_to_fetch, setListado, setLoading }: props) {

    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO
    let newlistado: usuarios_envio[] = []
    // let newlistado: usuarios_envio[] = []
    if (search_to_fetch == "") {
        url += "/"
        console.log("Hacer un fetch de todo")
    }
    else {
        url += "/" + search_to_fetch
        console.log("Hacer un fetch de " + url)
    }
    //cambiar el json a vawriable url
    setLoading(true)
    fetch("listadoUsuariosEnvio.json").then((response) => response.json()).then((array: usuarios_envio[]) => {


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

        return newlistado
    }
    ).then((newlistado) => { console.log(newlistado); return newlistado }).then((newlistado) => { setListado(newlistado) }).then(() => setLoading(false))




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