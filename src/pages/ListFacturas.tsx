import { FooterComp } from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { ListadoTodasFacturas } from "../components/ListadoTodasFacturas";
import { MainComp } from "../components/MainComp";

export function ListadoFacturas() {
    return (
        <>
            <HeaderComp></HeaderComp>
            <MainComp>
                <ListadoTodasFacturas />
            </MainComp>
            <FooterComp />
        </>
    )
}