import { FooterComp } from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { MainComp } from "../components/MainComp";

export function Index() {
    return (
        <>
            <HeaderComp></HeaderComp>
            <MainComp>
                <></>
            </MainComp>
            <FooterComp />
        </>
    )
}