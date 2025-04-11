import { useCallback, useEffect, useState } from "react";
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio.tsx";
import { usuarios_envio } from '../types/common.tsx'


export default function useListUsrEnvio({ search }) {
    const defListado: usuarios_envio[] = []
    const [listado, setListado] = useState(defListado)
    const [loading, setLoading] = useState(false)


    const getListado = useCallback(async ({ search }) => {

        setLoading(true)
        setListado(await obtenerListUsuariosXTipoEnvio(search));


        /*setListado(newListado.filter((listado) =>
            listado.nombre.toLowerCase().includes(search_to_fetch.toLowerCase())
        )) para hacer el filtrado aca en el mismo front*/

        setLoading(false)

    }, [search]);
    return { listado, loading, getListado }
}