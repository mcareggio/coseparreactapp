import { useEffect, useState } from "react";
import { tipo_envio_str, recibo } from "../types/common"
import { obtenerListRecibos } from "../services/obtenerListRecibos";

export function useListReciboPago({ tipo_envio = tipo_envio_str.none, id = "", telefono = "", email = "" }) {
    const emptylist: recibo[] = []
    const [listado_recibos, setListado_recibos] = useState(emptylist);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       
        obtenerListRecibos({ tipo_envio, telefono, email, id, setListado_recibos,setLoading})
        

    }, [])
    return { loading, listado_recibos }
}