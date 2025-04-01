export function periodoConBarra(periodo: number) {
    return (periodo.toString().slice(4, 6) + "/" + periodo.toString().slice(0, 4))
}
export function formatearModenedayRedondeo(importe: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(importe);
}