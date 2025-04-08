import { useEffect, useState } from "react";
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio.tsx";


export default function useListUsrEnvio({ search_to_fetch, listado, setListado, loading, setLoading }) {



    useEffect(() => {
        setLoading(true)
        obtenerListUsuariosXTipoEnvio(search_to_fetch,setListado)
        setLoading(false)

    }, [search_to_fetch]);
    return { listado, loading }
}