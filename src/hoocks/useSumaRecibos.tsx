import { useEffect, useState } from "react"

export function useSumaRecibos({ total_rec, setTotalRec, listado_recibos, isChecked, total_parc_arr }) {
    useEffect(() => {
        let newtotal = 0

        listado_recibos.map((recibo, index) => {
            if (!isChecked[index])
                newtotal += total_parc_arr[index]
        })
        setTotalRec(newtotal)
    }, [total_parc_arr, isChecked])
    return total_rec;
}