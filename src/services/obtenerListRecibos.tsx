import listadorecibo from "../mocks/listadorecibo.json"
import { recibo, tipo_envio_str } from "../types/common"

export function obtenerListRecibos({ tipo_envio = tipo_envio_str.whatsapp, telefono = "", email = "" }) {
    let newListRecibos: recibo[] = [];

    listadorecibo.map((obj) => {
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
            fecpago: fecpagostr

        })

    })
    return newListRecibos;
}