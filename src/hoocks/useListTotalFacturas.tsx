import { useEffect } from "react";
import { list_usuarios_facturas } from '../types/common.tsx'
import { obtenerListFacturas } from "../services/obtenerListFacturas.tsx";


export default function useListTotalFacturas({ search_to_fetch, listado, setListado, loading, setLoading }) {


    useEffect(() => {
        setLoading(true)
        let newListado: list_usuarios_facturas[] = obtenerListFacturas(search_to_fetch);//hacer un service nuvo

        setListado(newListado)
        /*setListado(newListado.filter((listado) =>
            listado.nombre.toLowerCase().includes(search_to_fetch.toLowerCase())
        )) para hacer el filtrado aca en el mismo front*/

        setLoading(false)

    }, [search_to_fetch]);
    return { listado, loading }
}