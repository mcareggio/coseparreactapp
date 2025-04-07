import { useEffect, useState } from "react";
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio.tsx";
import { usuarios_envio } from '../types/common.tsx'


export default function useListUsrEnvio({ search_to_fetch, listado, setListado, loading, setLoading }) {



    useEffect(() => {
        setLoading(true)
        let newListado: usuarios_envio[] = obtenerListUsuariosXTipoEnvio(search_to_fetch);


        setListado(newListado)
        /*setListado(newListado.filter((listado) =>
            listado.nombre.toLowerCase().includes(search_to_fetch.toLowerCase())
        )) para hacer el filtrado aca en el mismo front*/

        setLoading(false)

    }, [search_to_fetch]);
    return { listado, loading }
}