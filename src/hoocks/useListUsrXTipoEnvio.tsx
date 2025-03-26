import { useEffect, useState } from "react";
import { obtenerListDatos } from "../services/obtenerListDatos.tsx";
import { usuarios_envio } from '../types/common.tsx'


export default function useListUsrEnvio(search: string) {
    let url = import.meta.env.VITE_DEFAULT_PATH + "/" + import.meta.env.VITE_GET_USUARIOS_ENVIO
    const defListado: usuarios_envio[] = []
    const [listado, setListado] = useState(defListado)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        search != "" ? url = url + "/search/" + search : url
        const newListado: usuarios_envio[] = obtenerListDatos(url);
        console.log(url)
        setListado(newListado)
        setLoading(false)

    }, [search]);
    return { listado, loading }
}