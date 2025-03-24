import { useState } from 'react';
//import { datos_forma_envio, tipo_envio_str } from '../types/common.tsx';
import useListUsrXTipoEnvio from '../hoocks/useListUsrXTipoEnvio.tsx';
import { ListadoBarraBusqueda } from './ListadoBarraBusqueda.tsx';

export function ListadoUsuariosEnvio() {

    //    const defListado: datos_forma_envio[] = []
    const [search, setSearch] = useState("")
    const { listado, loading } = useListUsrXTipoEnvio(search)//Cambiando este hook se cambia lo que renderiza en el listado


    return (<ListadoBarraBusqueda setSearch={setSearch} listado={listado} loading={loading} />)
}