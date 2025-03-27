import { useEffect, useState } from "react";
import { tipo_envio_str, recibo } from "../types/common"
import { obtenerListRecibos } from "../services/obtenerListRecibos";

export function useListReciboPago({ tipo_envio = tipo_envio_str.whatsapp, telefono = "", email = "" }) {
    const emptylist: recibo[] = []
    const [listado_recibos, setListado_recibos] = useState(emptylist);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setListado_recibos(obtenerListRecibos({ tipo_envio, telefono, email }))
        setLoading(false);

    }, [])
    return { loading, listado_recibos }
}