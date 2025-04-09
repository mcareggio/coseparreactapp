import { useEffect, useState } from 'react';
//import { datos_forma_envio, tipo_envio_str } from '../types/common.tsx';
import useListUsrXTipoEnvio from '../hoocks/useListUsrXTipoEnvio.tsx';
import { BarraBusqueda } from './BarraBusqueda.tsx';
import useDebounce from '../hoocks/useDebounce.tsx';
import { usuarios_envio } from '../types/common.tsx';
import { TablaTipoEnvio } from './TablaTipoEnvio.tsx';
import { ModalAgregarUsuariosEnvio } from './ModalAgregarUsuariosEnvio.tsx';
import useListUsrEnvio from '../hoocks/useListUsrXTipoEnvio.tsx';
import { obtenerListUsuariosXTipoEnvio } from '../services/obtenerListUsuariosXTipoEnvio.tsx';

export function ListadoUsuariosEnvio() {

    //    const defListado: datos_forma_envio[] = []
    const [search, setSearch] = useState("")
    const [search_to_fetch, set_search_to_fetch] = useState("")
    const { listado, loading, getListado } = useListUsrEnvio({ search_to_fetch })//Cambiando este hook se cambia lo que renderiza en el listado
    const [isModalOpen, setModalOpen] = useState(false)

    useDebounce(() => {
        let newSearchtofetch = search
        set_search_to_fetch(newSearchtofetch)
        getListado({ search_to_fetch })
    }, [search], 800)

    useEffect(() => {

    }, [isModalOpen])
    useEffect(() => {
        // obtenerListUsuariosXTipoEnvio(search_to_fetch, setListado)
        //console.log(listado)
    }, [search_to_fetch])
    //

    return (
        <article className="princ-artivle">
            <BarraBusqueda setSearch={setSearch}><ModalAgregarUsuariosEnvio></ModalAgregarUsuariosEnvio></BarraBusqueda>
            <TablaTipoEnvio listado={listado} loading={loading}></TablaTipoEnvio>
        </article >
    )
}