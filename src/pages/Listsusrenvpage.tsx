import { FooterComp } from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { ListadoUsuariosEnvio } from "../components/ListadoUsuariosEnvio";
import { MainComp } from "../components/MainComp";

export function Listsusrenvpage() {
    return (
        <>
            <HeaderComp></HeaderComp>
            <MainComp>
                <ListadoUsuariosEnvio />
            </MainComp>
            <FooterComp />
        </>
    )
}