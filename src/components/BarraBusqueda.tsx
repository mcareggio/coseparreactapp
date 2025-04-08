import { Children, useId } from "react";
import { TablaTipoEnvio } from "./TablaTipoEnvio";


export function BarraBusqueda({ setSearch, children }) {
    const inp_search_id = useId();
    const form_id = useId();

    const handleClick = (event: Event) => {
        event.preventDefault();
        const nuevaBusqueda: string = (document.getElementById(inp_search_id) as HTMLInputElement).value
        setSearch(nuevaBusqueda)
    }
    const handleSearch = (e: Event) => {
        setSearch(e.target.value)
    }
    return (
        < header className='dv-header'>
            <form className='dv-header-form' id={form_id}>
                <label htmlFor={inp_search_id}>Buscar:</label>
                <input type='search' id={inp_search_id} name='cmp_search' onChange={handleSearch}></input>
                <button type='submit' name='Buscar' className='btn-buscar' onClick={handleClick}>Buscar</button>
            </form>
            {Children.map(children, child => child
            )}
        </header>
    );

}