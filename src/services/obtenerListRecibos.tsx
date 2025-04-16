import  { Dispatch, SetStateAction } from "react"

import { recibo, tipo_envio_str } from "../types/common"
type props={
    tipo_envio:tipo_envio_str,
    telefono:string,
    email:string,
    id:string
    setListado_recibos:Dispatch<SetStateAction<recibo[]>>,
    setLoading:Dispatch<SetStateAction<boolean>>
}
export function obtenerListRecibos({ tipo_envio = tipo_envio_str.none, telefono = "", email = "", id = "",setListado_recibos,setLoading }:props) {
    let newListRecibos: recibo[] = [];

    switch (tipo_envio) {
        case tipo_envio_str.whatsapp:
            console.log("hace un fetch del whatsapp: " + telefono)
            break
        case tipo_envio_str.mail:
            console.log("hace un fetch del mail: " + email)
            break
        case tipo_envio_str.none:
            console.log("hace un fetch del id: " + id)
            break


    }
    setLoading(true)
    fetch('../listadorecibo.json').then(response => response.json()).then((listadorecibo) => listadorecibo.map((obj:recibo) => {
        let fecpagostr = ""
        obj.fecpago == null ? fecpagostr = "" : fecpagostr = obj.fecpago
        newListRecibos.push({
            ruta: obj.ruta,
            folio: obj.folio,
            subfolio: obj.subfolio,
            nombre: obj.nombre,
            direccion: obj.direccion,
            periodo: obj.periodo,
            total: obj.total,
            fecpago: fecpagostr,
            activo: true

        })
       setListado_recibos(newListRecibos)
       setLoading(false) 

    }))
    return newListRecibos;
}