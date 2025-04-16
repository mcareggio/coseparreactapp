import { useEffect, useState } from "react"
import { usuarios_envio } from "../types/common"
import useListUsrEnvio from "../hoocks/useListUsrXTipoEnvio"
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi"
import { obtenerListUsuariosXTipoEnvio } from "../services/obtenerListUsuariosXTipoEnvio"
import React from "react"
type props={
    listado:usuarios_envio[],
    loading:boolean

}

export function TablaTipoEnvio({ listado, loading }:props) {


   
    return (
        <PersonaEnvio listado={listado} loading={loading} />
        
    )
    return (
        <ul className="ul-list-tipoenvio">
            {loading ? <p>Loading</p> : listado.map((el: usuarios_envio) =>
                 <li className='li-list-tipoenvio' key={el.id}>
                {el.nombre}
               </li>
            )}
        </ul>
        )
}
function PersonaEnvio({ listado,loading  }:props) {
    return (
        <ul className="ul-list-tipoenvio">
            {loading ? <p>Loading</p> : listado.map((el: usuarios_envio) =>
                <li className='li-list-tipoenvio' key={el.id}>
                    <div className="list-tipoenvio-item"><a
                        href={el.enviowhatsapp ? "./recibos-telefono/" + el.telefono : el.enviomail ? "./recibos-email/" + el.email : "./recibos/" + el.id}
                    >{el.nombre}</a></div>
                    {el.enviowhatsapp ? <div className="tipo-envio-lst">Envio WhatsApp</div> :<></> }
                    {(el.enviowhatsapp && el.enviomail) ? <div className="tipo-envio-lst"> and </div> :<></>}
                    {el.enviomail ? <div className="tipo-envio-lst">Envio E-Mail</div> :<></>}
                    {(!el.enviowhatsapp && !el.enviomail) ? <div className="tipo-envio-lst">Sin Envio</div> :<></>}
                </li>

            )}
        </ul>
    )
}