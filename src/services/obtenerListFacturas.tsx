import listadoFacturas from '../mocks/listadoFacturas.json';
import { list_usuarios_facturas } from '../types/common.tsx'
/*
export function obtenerListDatos(url: string) {

    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO


    let newresult = [{}]
    fetch(url).then((response) => response.json()).then((telefonos) => newresult = telefonos)

    return newresult;

}
*/
export function obtenerListFacturas(search_to_fetch: string) {
    if (search_to_fetch == "")
        console.log("Listar todo")
    else
        console.log("solo listar busqueda" + search_to_fetch)
    let newlistado: list_usuarios_facturas[] = []
    listadoFacturas.map((el) => {
        newlistado.push(
            {
                id: el.id,
                nombre: el.nombre,
                direccion: el.direccion,
                ruta: el.ruta,
                folio: el.folio,
                subfolio: el.subfolio
            })
    })
    return newlistado;

}