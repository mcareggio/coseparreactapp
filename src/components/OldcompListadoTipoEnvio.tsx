import { useEffect, useId, useState } from 'react';
import { datos_forma_envio, tipo_envio_str } from '../types/common.tsx';
import useListUsrXTipoEnvio from '../hoocks/useListUsrXTipoEnvio.tsx';

export function ListadoTipoEnvio() {

    const defListado: datos_forma_envio[] = []
    const [search, setSearch] = useState("")
    const { listado, loading } = useListUsrXTipoEnvio(search)
    const inp_search_id = useId();
    const form_id = useId();

    const handleClick = (event: Event) => {
        event.preventDefault();
        const nuevaBusqueda: string = (document.getElementById(inp_search_id) as HTMLInputElement).value
        setSearch(nuevaBusqueda)
    }

    return (
        <article className="princ-artivle">
            <header></header>
            <section>
                {loading ? <h1>Is Loading</h1> : <>
                    < header className='dv-header'>
                        <form className='dv-header-form' id={form_id}>
                            <label htmlFor={inp_search_id}>Buscar:</label>
                            <input type='search' id={inp_search_id} name='cmp_search'></input>
                            <button type='submit' name='Buscar' className='btn-buscar' onClick={handleClick}>Buscar</button>
                        </form>
                    </header>
                    <ul className="ul-list-tipoenvio">
                        {listado.map((el) => (
                            <li className='li-list-tipoenvio' key={el.id}>
                                <div className="list-tipoenvio-item">{el.nombre}</div>
                                <div className="list-tipoenvio-item">{el.formaEnvio}</div>
                            </li>

                        ))}
                    </ul></>}
            </section>
        </article >
    );
}
