import { Dispatch, SetStateAction } from 'react'
import { list_usuarios_facturas } from '../types/common.tsx'
type props = {
    search_to_fetch: string,
    setListado: Dispatch<SetStateAction<list_usuarios_facturas[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>
}
export function obtenerListFacturas({ search_to_fetch, setListado, setLoading }: props) {

    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO

    if (search_to_fetch == "")
        console.log("Listar todo")
    else
        console.log("solo listar busqueda" + search_to_fetch)

    setLoading(true)
    fetch("listadoFacturas.json").then((response) => response.json()).then((listadoFacturas: list_usuarios_facturas[]) => {
        let newlistado: list_usuarios_facturas[] = []
        listadoFacturas.map((el: list_usuarios_facturas) => {
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
        return newlistado
    }
    ).then((newlistado) => setListado(newlistado)).then(() => setLoading(false))


}