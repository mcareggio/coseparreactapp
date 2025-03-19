import { useId, useState } from 'react';
import useListarUsrTipoEnvio from '../hoocks/listarusrtipoenvio.tsx';
import { tipo_envio_str } from '../types/common.tsx';


export function ListadoTipoEnvio() {


    const [tipoEnvio, setipoEnvio] = useState(tipo_envio_str.whatsapp);
    const { listado } = useListarUsrTipoEnvio({ tipoEnvio });
    const inp_search_id = useId();
    const form_id = useId();
    function handleClick(event: Event) {
        event.preventDefault();
        console.log(document.getElementById(inp_search_id).value)
    }
    return (
        <article className="princ-artivle">
            <header></header>
            <section>
                <header className='dv-header'>
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
                </ul>
            </section>
        </article>
    );
}
