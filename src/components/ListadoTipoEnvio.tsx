import { useState } from 'react';
import useListarUsrTipoEnvio from '../hoocks/listarusrtipoenvio.tsx';
import { tipo_envio_str } from '../types/common.tsx';


export function ListadoTipoEnvio() {


    const [tipoEnvio, setipoEnvio] = useState(tipo_envio_str.whatsapp);
    const { listado } = useListarUsrTipoEnvio({ tipoEnvio });
    function handleClick(event: Event) {
        event.preventDefault();
        const formdata: FormData = new FormData(document.getElementsByTagName('form')[0]);
        formdata.get("cmp_search")
        console.log()
        return null;
    }
    return (
        <article className="princ-artivle">
            <header></header>
            <section>
                <header className='dv-header'>
                    <form className='dv-header-form'>
                        <label htmlFor='cmp_search'>Buscar:</label>
                        <input type='search' id='cmp_search' name='cmp_search'></input>
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
