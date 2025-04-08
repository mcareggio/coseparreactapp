import { useEffect } from "react"
import { usuarios_envio } from "../types/common"
import useListUsrEnvio from "../hoocks/useListUsrXTipoEnvio"
export function TablaTipoEnvio({listado, loading}) {

    return (
        <ul className="ul-list-tipoenvio">
            {loading && listado.map((el: usuarios_envio) => (
                <li className='li-list-tipoenvio' key={el.id}>
                    <div className="list-tipoenvio-item"><a
                        href={el.enviowhatsapp ? "./recibos-telefono/" + el.telefono : el.enviomail ? "./recibos-email/" + el.email : "./recibos/" + el.id}
                    >{el.nombre}</a></div>
                    {el.enviowhatsapp && <div className="tipo-envio-lst">Envio WhatsApp</div>}
                    {(el.enviowhatsapp && el.enviomail) && <div className="tipo-envio-lst"> & </div>}
                    {el.enviomail && <div className="tipo-envio-lst">Envio E-Mail</div>}
                    {(!el.enviowhatsapp && !el.enviomail) && <div className="tipo-envio-lst">Sin Envio</div>}
                </li>

            ))}
        </ul>
    )
}