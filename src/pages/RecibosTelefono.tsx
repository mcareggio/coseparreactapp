import { useParams } from "react-router";
import { FooterComp } from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { MainComp } from "../components/MainComp";
import { useListReciboPago } from "../hoocks/useListReciboPago";
import { tipo_envio_str } from "../types/common";
import { useId, useState } from "react";

export function RecibosTelefono() {
    const idselect = useId();
    const { telefono, email } = useParams();
    const tipo_envio = tipo_envio_str.whatsapp
    const { loading, listado_recibos } = useListReciboPago({ tipo_envio, telefono, email })
    const [total_rec, setTotalRec] = useState(100000)

    function handleChangeCheck(event: Event) {
        console.log(document.getElementById(event.target.value))

    }

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
                        listado_recibos.map((el) => (
                            <div className="rec-main-cont-grilla elementos-grilla-rc" key={"k-" + el.ruta + el.folio + el.subfolio + el.periodo}>
                                <div className="rc-inp-gr-cont">
                                    <input
                                        type="checkbox"
                                        id={"chkbx-" + el.ruta + el.folio + el.subfolio + el.periodo}
                                        checked
                                        onChange={handleChangeCheck}
                                    />

                                </div>
                                <div>{el.ruta + "-" + el.folio}</div>
                                <div>{el.nombre}</div>
                                <div>{el.direccion}</div>
                                <div><select id={idselect} defaultValue={0}>
                                    <option value="0">0%</option>
                                    <option value="1">1%</option>
                                    <option value="2">2%</option>
                                    <option value="3">3%</option>
                                    <option value="4">4%</option>
                                    <option>5%</option>
                                    <option>6%</option>
                                </select></div>
                                <div>{el.total}</div>
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