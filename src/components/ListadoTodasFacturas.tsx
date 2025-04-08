import { useState } from 'react';
//import { datos_forma_envio, tipo_envio_str } from '../types/common.tsx';
import useListUsrXTipoEnvio from '../hoocks/useListUsrXTipoEnvio.tsx';
import { BarraBusqueda } from './BarraBusqueda.tsx';
import useDebounce from '../hoocks/useDebounce.tsx';
import { usuarios_envio } from '../types/common.tsx';
import useListTotalFacturas from '../hoocks/useListTotalFacturas.tsx';
import { TablaFacturas } from './TablaFacturas.tsx';

export function ListadoTodasFacturas() {

    //    const defListado: datos_forma_envio[] = []
    const [search, setSearch] = useState("")
    const [search_to_fetch, set_search_to_fetch] = useState("")
    const defListado: usuarios_envio[] = []
    const [listado, setListado] = useState(defListado)
    const [loading, setLoading] = useState(false)

    useDebounce(() => {
        let newSearchtofetch = search
        set_search_to_fetch(newSearchtofetch)
    }, [search], 600)

    //useListUsrXTipoEnvio({ search_to_fetch, listado, setListado, loading, setLoading })//Cambiando este hook se cambia lo que renderiza en el listado
    useListTotalFacturas({ search_to_fetch, listado, setListado, loading, setLoading })
    return (
        <article className="princ-artivle">
            <BarraBusqueda setSearch={setSearch}></BarraBusqueda>
            <TablaFacturas listado={listado} loading={loading}></TablaFacturas>
        </article>
    )
}