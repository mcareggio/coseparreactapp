import { useEffect } from "react";
import { list_usuarios_facturas } from '../types/common.tsx'
import { obtenerListFacturas } from "../services/obtenerListFacturas.tsx";


export default function useListTotalFacturas({ search_to_fetch, listado, setListado, loading, setLoading }) {


    useEffect(() => {
        obtenerListFacturas({ search_to_fetch, setListado, setLoading });//hacer un service nuvo
    }, [search_to_fetch]);
    return { listado, loading }
}