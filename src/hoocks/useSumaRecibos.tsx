import { useEffect, useState } from "react"

export function useSumaRecibos({ total_rec, setTotalRec, listado_recibos, isChecked, interesarr }) {
    useEffect(() => {
        let newtotal = 0

        listado_recibos.map((recibo, index) => {
            if (!isChecked[index])
                newtotal += recibo.total
        })
        setTotalRec(newtotal)
    }, [isChecked, interesarr])
    return total_rec;
}