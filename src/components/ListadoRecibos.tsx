import { useParams } from "react-router";
import {  formatearBarcode, formatearModenedayRedondeo, formatearNombreArchivo, periodoConBarra, recortar } from "../helpers/helpers";
import { Selectinteres } from "./Selectinteres";
import { useListReciboPago } from "../hoocks/useListReciboPago";
import { useEffect, useState } from "react";
import { useSumaRecibos } from "../hoocks/useSumaRecibos";
import { recibo, tipo_envio_str } from "../types/common";
import { Checkbox } from "./checkbox";
import { PrintButton } from "./PrintButton";
import { TablaReciboImpresion } from "./TablaRecibosImpresion";
import { AiOutlineDownload } from "react-icons/ai";

export function ListadoRecibos({ listado_recibos }) {

    const [total_rec, setTotalRec] = useState(0)

    const array_state_checkbox: boolean[] = new Array(200).fill(false)
    const array_state_select: string[] = new Array(200).fill("")
    const array_state_parc: number[] = new Array(200).fill(0)
    const [isChecked, setCheck] = useState(array_state_checkbox)
    const [interesarr, setInteresarr] = useState(array_state_select)
    const [total_parc_arr, setParcArr] = useState(array_state_parc)
    useSumaRecibos({ total_rec, setTotalRec, listado_recibos, isChecked, total_parc_arr })

    useEffect(() => {
        let newarray_state_checkbox: boolean[] = []
        let newarray_state_interes: string[] = []
        let newarray_state_parc: number[] = []
        console.log(isChecked)
        listado_recibos.map((el:recibo) => {
            newarray_state_checkbox.push(false);
            newarray_state_interes.push("0")
            newarray_state_parc.push(el.total)
        })
        setCheck(newarray_state_checkbox)
        setInteresarr(newarray_state_interes)
        setParcArr(newarray_state_parc)
    }, [listado_recibos])
    useEffect(() => {
        setCheck(new Array(200).fill(false))
        setInteresarr(new Array(200).fill(""))
        setParcArr(new Array(200).fill(0))
    }, [])
    useEffect(() => {
        let newarray_state_parc: number[] = []
        listado_recibos.map((el:recibo, index:number) => {
            let parcial = el.total + (el.total * (Number.parseInt(interesarr[index]) / 100))
            newarray_state_parc.push(parcial)
        })
        setParcArr(newarray_state_parc)
    }, [interesarr])
    useEffect(() => {
        let newarray_state_parc: number[] = []
        listado_recibos.map((el:recibo, index:number) => {
            let parcial = el.total + (el.total * (Number.parseInt(interesarr[index]) / 100))
            newarray_state_parc.push(parcial)
        })
        isChecked.map((el, index) => {
            if (el) {
                document.getElementById("grilla-" + index)?.classList.add("tachado")
                newarray_state_parc[index] = 0
            }
            else
                document.getElementById("grilla-" + index)?.classList.remove("tachado")

        })

        setParcArr(newarray_state_parc)
    }, [isChecked])
    return (
        <>
            <div className="rec-main-cont not-print">
                <h1>Cooperativa de Agua Potable, Vivienda, Consumo, Servicios Asistenciales y Otros Servicios Publicos de Arata Limitada</h1>
                <div className="rec-main-cont-grilla titulos-grilla">
                    <div className="checkbox-gr-st"></div>
                    <div className="cnt-brdr">Ruta-Folio-Sub</div>
                    <div className="cnt-brdr">Nombre y Apellido</div>
                    <div className="cnt-brdr">Direccion</div>
                    <div className="cnt-brdr">Periodo</div>
                    <div className="cnt-brdr selectinteres">Interes</div>
                    <div className="cnt-brdr" style={{ textAlign: "center" }}> Importe</div>
                    <div className="cnt-brdr"></div>
                </div>


                {

                    listado_recibos.map((el:recibo, index:number) => (
                        <div className="rec-main-cont-grilla elementos-grilla-rc" id={"grilla-" + index} key={"k-" + index}>
                            <div className="rc-inp-gr-cont checkbox-gr-st">

                                <Checkbox id={index} isChecked={isChecked} setCheck={setCheck} />

                            </div>
                            <div>{el.ruta + "-" + el.folio + "-" + el.subfolio}</div>
                            <span>{recortar(el.nombre)}</span>
                            <div>{el.direccion}</div>
                            <div>{periodoConBarra(el.periodo)}</div>
                            <div className="selectinteres"><Selectinteres id={"select" + index} interesarr={interesarr} setInteresarr={setInteresarr} /></div>
                            <div className="importeparcial">{formatearModenedayRedondeo(total_parc_arr[index])}</div>
                            <div className="importeparcial"><a href={formatearNombreArchivo(el.ruta, el.folio, el.subfolio, el.periodo)}><AiOutlineDownload /></a></div>
                        </div>
                    ))
                }

                <div className="rec-main-cont-grilla-total">
                    <div className="cnt-flex flx-dir-rwrev"><PrintButton /></div>
                    <div className="total-recibos">Total: {formatearModenedayRedondeo(total_rec)}</div>
                </div>

            </div >
            <TablaReciboImpresion {... { listado_recibos, isChecked, total_parc_arr, total_rec }} />
            <TablaReciboImpresion {... { listado_recibos, isChecked, total_parc_arr, total_rec }} />
        </>)
}