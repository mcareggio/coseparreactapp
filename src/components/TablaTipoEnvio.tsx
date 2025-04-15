import { useEffect, useState } from "react"
import { usuarios_envio } from "../types/common"
import useListUsrEnvio from "../hoocks/useListUsrXTipoEnvio"
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi"
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio"
import React from "react"

export function TablaTipoEnvio({ listado, loading }) {

    useEffect(() => {
        console.log("{")
        console.log(listado)
        console.log(loading)
        console.log(listado.length)
        console.log("}")
    }, [listado])
    const hasPersonas = listado?.length > 0

    return (
        hasPersonas
            ? <PersonaEnvio listado={listado} loading={loading} />
            : <p>Sin Resultados</p>

    )
}
function PersonaEnvio({ listado, loading }) {
    return (
        <ul className="ul-list-tipoenvio">
            {loading ? <p>loading</p> : listado.map((el: usuarios_envio) =>
                <li className='li-list-tipoenvio' key={el.id}>
                    <div className="list-tipoenvio-item"><a
                        href={el.enviowhatsapp ? "./recibos-telefono/" + el.telefono : el.enviomail ? "./recibos-email/" + el.email : "./recibos/" + el.id}
                    >{el.nombre}</a></div>
                    {el.enviowhatsapp && <div className="tipo-envio-lst">Envio WhatsApp</div>}
                    {(el.enviowhatsapp && el.enviomail) && <div className="tipo-envio-lst"> & </div>}
                    {el.enviomail && <div className="tipo-envio-lst">Envio E-Mail</div>}
                    {(!el.enviowhatsapp && !el.enviomail) && <div className="tipo-envio-lst">Sin Envio</div>}
                </li>

            )}
        </ul>
    )
}