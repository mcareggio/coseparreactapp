import { useCallback, useEffect, useState } from "react";
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio.tsx";
import { usuarios_envio } from '../types/common.tsx'


export default function useListUsrEnvio() {
    const defListado: usuarios_envio[] = []
    const [listado, setListado] = useState(defListado)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")


    const getListado = useCallback(async ({ search }) => {

        setLoading(true)
        let newlistado: usuarios_envio[] = obtenerListUsuariosXTipoEnvio(search)
        console.log(listado)
        setListado(newlistado);
        setLoading(false)

    }, [search]);
    return { listado, loading, setListado, setSearch, search }
}