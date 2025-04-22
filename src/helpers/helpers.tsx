export function periodoConBarra(periodo: number) {
    return (periodo.toString().slice(4, 6) + "/" + periodo.toString().slice(0, 4))
}
export function formatearModenedayRedondeo(importe: number) {
    if (importe != null)
        return importe.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP"
        });
    else
        return 0;
}

export function formatearBarcode(ruta: number, folio: number, subfolio: number, periodo: number) {
    let stringVariable = "00"
    let folio_str = folio.toString();

    if (folio_str.length == 2)
        stringVariable = "000"
    else
        if (folio_str.length == 1)
            stringVariable = "0000"

    var strdev = "010" + ruta + stringVariable + folio_str + subfolio + periodo

    return strdev
}
export function formatearNombreArchivo(ruta: number, folio: number, subfolio: number, periodo: number) {
    var stringVariable = "00"
    var folio_str = folio.toString();

    if (folio_str.length == 2)
        stringVariable = "000"
    else
        if (folio_str.length == 1)
            stringVariable = "0000"

    var strdev = "/facturas/" + periodo + "/" + "010" + ruta + stringVariable + folio_str + subfolio + "-" + convertirPeriodoSinBarra(periodo) + ".pdf"

    return strdev
}
function convertirPeriodoSinBarra(periodo: number) {
    let periodo_str = periodo.toString()
    var newPeriodo = periodo_str.charAt(4) + periodo_str.charAt(5) + periodo_str.charAt(0) + periodo_str.charAt(1) + periodo_str.charAt(2) + periodo_str.charAt(3)
    return newPeriodo
}
export function fechaCompleta() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const fecha_completa = hoy + "/" + mes + "/" + anio
    return fecha_completa;
}
export function recortar(str: string) {
    return str.slice(0, 20)
}