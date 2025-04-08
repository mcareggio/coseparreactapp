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
    const defListado: usuarios_envio[] = []
    const [listado, setListado] = useState()
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    useDebounce(() => {
        let newSearchtofetch = search
        set_search_to_fetch(newSearchtofetch)
    }, [search], 800)

    useEffect(() => {

    }, [isModalOpen])
    useEffect(()=>{
        obtenerListUsuariosXTipoEnvio(search_to_fetch,setListado)
        console.log(listado)
    },[search_to_fetch])
    //useListUsrEnvio( {search_to_fetch, listado, setListado, loading, setLoading })//Cambiando este hook se cambia lo que renderiza en el listado
    
    return (
        <article className="princ-artivle">
            <BarraBusqueda setSearch={setSearch}><ModalAgregarUsuariosEnvio></ModalAgregarUsuariosEnvio></BarraBusqueda>
            <TablaTipoEnvio listado={listado} loading={loading}></TablaTipoEnvio>
        </article >
    )
}