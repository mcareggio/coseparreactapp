import { useParams } from "react-router";
import { FooterComp } from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { MainComp } from "../components/MainComp";
import { useListReciboPago } from "../hoocks/useListReciboPago";
import { tipo_envio_str } from "../types/common";
import { useEffect, useId, useState } from "react";
import { Checkbox } from "../components/checkbox";
import { useSumaRecibos } from "../hoocks/useSumaRecibos";
import { Selectinteres } from "../components/selectinteres";
export function RecibosTelefono() {

    const { telefono, email } = useParams();
    const tipo_envio = tipo_envio_str.whatsapp
    const { loading, listado_recibos } = useListReciboPago({ tipo_envio, telefono, email })
    const [total_rec, setTotalRec] = useState(0)

    const array_state_checkbox: boolean[] = new Array(200).fill(false)
    const array_state_select: string[] = new Array(200).fill("")
    const array_state_parc: number[] = new Array(200).fill(0)
    const [isChecked, setCheck] = useState(array_state_checkbox)
    const [interesarr, setInteresarr] = useState(array_state_select)
    const [total_parc_arr, setParcArr] = useState(array_state_parc)
    const suma = useSumaRecibos({ total_rec, setTotalRec, listado_recibos, isChecked, interesarr })

    useEffect(() => {
        let newarray_state_checkbox: boolean[] = []
        let newarray_state_interes: string[] = []
        let newarray_state_parc: number[] = []
        console.log(isChecked)
        listado_recibos.map((el) => {
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
        listado_recibos.map((el, index) => {
            let parcial = el.total + (el.total * (Number.parseInt(interesarr[index]) / 100))
            newarray_state_parc.push(parcial)
        })
        setParcArr(newarray_state_parc)
    }, [interesarr])
    useEffect(() => {

        isChecked.map((el, index) => {
            if (el)
                document.getElementById("grilla-" + index)?.classList.add("tachado")
            else
                document.getElementById("grilla-" + index)?.classList.remove("tachado")

        })
    }, [isChecked])

    return (
        <>
            <HeaderComp></HeaderComp>
            <MainComp>
                <div className="rec-main-cont">
                    <h1>Cooperativa de Agua Potable, Vivienda, Consumo, Servicios Asistenciales y Otros Servicios de Arata Limitada</h1>
                    <div className="rec-main-cont-grilla titulos-grilla">
                        <div className=""></div>
                        <div className="cnt-brdr">Ruta-Folio-Sub</div>
                        <div className="cnt-brdr">Nombre y Apellido</div>
                        <div className="cnt-brdr">Direccion</div>
                        <div className="cnt-brdr">Interes</div>
                        <div className="cnt-brdr">Importe</div>
                        <div className="cnt-brdr">Bar Code Exampleeeeeee</div>
                    </div>


                    {

                        listado_recibos.map((el, index) => (
                            <div className="rec-main-cont-grilla elementos-grilla-rc" id={"grilla-" + index} key={"k-" + index}>
                                <div className="rc-inp-gr-cont">

                                    <Checkbox id={index} isChecked={isChecked} setCheck={setCheck} />

                                </div>
                                <div>{el.ruta + "-" + el.folio}</div>
                                <div>{el.nombre}</div>
                                <div>{el.direccion}</div>
                                <div><Selectinteres id={"select" + index} interesarr={interesarr} setInteresarr={setInteresarr} /></div>
                                <div>${total_parc_arr[index]}</div>
                                <div>Bar Code Exampleeeeeee</div>
                            </div>
                        ))}

                    <div className="rec-main-cont-grilla-total">
                        <div></div>
                        <div className="total-recibos">Total: ${total_rec}</div>
                    </div>

                </div>
            </MainComp >
            <FooterComp />
        </>
    )
}