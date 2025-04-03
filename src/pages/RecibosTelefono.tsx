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
import { formatearModenedayRedondeo, periodoConBarra } from "../helpers/helpers";
import { ListadoRecibos } from "../components/ListadoRecibos";
export function RecibosTelefono() {



    return (
        <>
            <HeaderComp></HeaderComp>
            <MainComp>
                <ListadoRecibos />
            </MainComp >
            <FooterComp />
        </>
    )
}