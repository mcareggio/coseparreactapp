import {  useEffect, useState } from "react";
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio.tsx";
import { usuarios_envio } from '../types/common.tsx'


export default function useListUsrEnvio() {
    const defListado: usuarios_envio[] = []
    const [listado, setListado] = useState(defListado)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [search_to_fetch,set_search_to_fetch]=useState("")

    useEffect(()=>{
        obtenerListUsuariosXTipoEnvio({search_to_fetch,setListado,setLoading})
    }, [search_to_fetch]);
    return { listado, loading, setSearch, search,search_to_fetch,set_search_to_fetch }
}