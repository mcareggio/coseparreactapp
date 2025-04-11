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
    //const [search_to_fetch, set_search_to_fetch] = useState("")
    const [listado, setListado] = useState([{ id: 1, nombre: "marcos" }])
    const loading = false
    // const { loading, getListado } = useListUsrEnvio({ search })//Cambiando este hook se cambia lo que renderiza en el listado
    //const [isModalOpen, setModalOpen] = useState(false)
    /*
        useDebounce(() => {
            console.log(search)
            let newSearchtofetch = search
            set_search_to_fetch(newSearchtofetch)
            getListado({ search })
        }, [getListado], 800)
    */
    useEffect(() => {
        let newlistado = obtenerListUsuariosXTipoEnvio({ search })
        //getListado({ search })
        setListado(newlistado)
    }, [search])
    return (

        <article className="princ-artivle">
            {listado.map((el) => (<p key={el.id}>aaaa{el.id}</p>))}
            <BarraBusqueda setSearch={setSearch} search={search}></BarraBusqueda>
            <TablaTipoEnvio listado={listado} loading={loading}></TablaTipoEnvio>
        </article >
    )
}