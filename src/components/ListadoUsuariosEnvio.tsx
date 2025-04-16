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

    
    const { loading, listado, search, setSearch,search_to_fetch,set_search_to_fetch } = useListUsrEnvio()//Cambiando este hook se cambia lo que renderiza en el listado
    //const [isModalOpen, setModalOpen] = useState(false)
    
        useDebounce(() => {
            let newSearchtofetch = search
            set_search_to_fetch(newSearchtofetch)
        }, [search], 800)
   
    return (

        <article className="princ-artivle">
            <BarraBusqueda setSearch={setSearch} search={search}></BarraBusqueda>
            <TablaTipoEnvio listado={listado} loading={loading}></TablaTipoEnvio>
        </article >
    )
}