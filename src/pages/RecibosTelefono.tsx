import { FooterComp } from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { MainComp } from "../components/MainComp";

export function RecibosTelefono() {
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
                    <div className="rec-main-cont-grilla elementos-grilla-rc">
                        <div className="rc-inp-gr-cont"><input type="checkbox"></input></div>
                        <div>120-1</div>
                        <div>Nombre y Apellido</div>
                        <div>Direccion</div>
                        <div>Select Interres</div>
                        <div>Importe</div>
                        <div>Bar Code Exampleeeeeee</div>
                    </div>
                </div>
            </MainComp>
            <FooterComp />
        </>
    )
}