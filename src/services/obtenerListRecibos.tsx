import listadorecibo from "../mocks/listadorecibo.json"
import { recibo, tipo_envio_str } from "../types/common"

export function obtenerListRecibos({ tipo_envio = tipo_envio_str.none, telefono = "", email = "", id = "" }) {
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
    fetch('../listadorecibo.json').then(response => response.json()).then((listadorecibo) => listadorecibo.map((obj) => {
        let fecpagostr = ""
        obj.fecpago == null ? fecpagostr = "" : fecpagostr = obj.fecpago
        newListRecibos.push({
            ruta: obj.ruta,
            folio: obj.folio,
            subfolio: obj.subfolio,
            nombre: obj.nombre,
            direccion: obj.direccion,
            periodo: obj.periodo,
            total: Number.parseFloat(obj.total),
            fecpago: fecpagostr,
            activo: true

        })

    }))
    return newListRecibos;
}