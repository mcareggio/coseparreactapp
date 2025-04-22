import { fechaCompleta, formatearBarcode, formatearModenedayRedondeo, periodoConBarra, recortar } from "../helpers/helpers";
import { recibo } from "../types/common";
import { Barcode } from "./BarCode";
type props={
    listado_recibos:recibo[],
    isChecked:boolean[],
    total_parc_arr:number[],
    total_rec:number
}
export function TablaReciboImpresion({ listado_recibos, isChecked, total_parc_arr, total_rec }:props) {

    return (
        <div className="rec-main-cont print-cont">
            <h1>Cooperativa de Agua Potable, Vivienda, Consumo, Servicios Asistenciales y Otros Servicios Publicos de Arata Limitada</h1>
            <div className="fecha-rec-pago">
                <div>Recibo de Pago</div>
                <div>Fecha: {fechaCompleta()}</div>
            </div>
            <table id="print table" className="print-table">
                <tbody>
                    {
                        listado_recibos.map((el: recibo, index: number) => (
                            !isChecked[index] &&
                            <tr key={"table-" + index}>
                                <td>{el.ruta + "-" + el.folio + "-" + el.subfolio}</td>
                                <td>{recortar(el.nombre)}</td>
                                <td>{el.direccion}</td>
                                <td>Periodo:{periodoConBarra(el.periodo)}</td>
                                <td className="td-price">{formatearModenedayRedondeo(total_parc_arr[index])}</td>
                                <td className="td-barcode"><Barcode className="barcode" code={formatearBarcode(el.ruta, el.folio, el.subfolio, el.periodo)} /></td>
                            </tr>
                        ))

                    }
                    <tr key="table-total">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="td-price tx-bold">Total: {formatearModenedayRedondeo(total_rec)}</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div >
    )
}