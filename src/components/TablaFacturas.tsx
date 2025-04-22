import { useRef } from "react";
import { list_usuarios_facturas } from "../types/common";

export function TablaFacturas({ listado, loading }) {
    const link = useRef("")
    return (

        <table className="tbl-list-tipoenvio">
            <tbody>
                    <tr>
                        <th>#</th>
                        <th>Ruta-Folio-Subfolio</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                    </tr>
                {loading ? <tr><td>Loading...</td></tr> : listado.map((el: list_usuarios_facturas, index: number) => (
                    
                    <tr key={"table-fac-" + index}>

                        <td><a href={link.current = "recibos/" + el.id}>{el.id}</a></td>
                        <td><a href={link.current}>{el.ruta + "-" + el.folio + "-" + el.subfolio}</a></td>
                        <td><a href={link.current}>{el.nombre}</a></td>
                        <td>{el.direccion}</td>

                    </tr>

                ))
                }
            </tbody>
        </table>
    )
}