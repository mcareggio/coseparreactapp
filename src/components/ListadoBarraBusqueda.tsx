import { useId } from "react";
import { usuarios_envio } from '../types/common'

export function ListadoBarraBusqueda({ setSearch, listado, loading }) {
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
                {loading ? <h1>Por Favor Espere..</h1> : <>
                    < header className='dv-header'>
                        <form className='dv-header-form' id={form_id}>
                            <label htmlFor={inp_search_id}>Buscar:</label>
                            <input type='search' id={inp_search_id} name='cmp_search'></input>
                            <button type='submit' name='Buscar' className='btn-buscar' onClick={handleClick}>Buscar</button>
                        </form>
                    </header>
                    <ul className="ul-list-tipoenvio">
                        {listado.map((el: usuarios_envio) => (
                            <li className='li-list-tipoenvio' key={el.id}>
                                <div className="list-tipoenvio-item"><a
                                    href={el.enviowhatsapp ? "./recibos-telefono/" + el.telefono : "./recibos-correo/" + el.email}
                                >{el.nombre}</a></div>
                            </li>

                        ))}
                    </ul></>}
            </section>
        </article >
    );

}